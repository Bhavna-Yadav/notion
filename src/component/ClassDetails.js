import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';

const ClassDetails = () => {
  const {id}= useParams();
  const [classData, setClassData ] = useState();
  const fetchNotionData = async () => {
    try {
      const response = await fetch(`http://localhost:3003/api/${id}`
      );

      const data = await response.json();
      setClassData(data.results);
      console.log(data);
    } catch (error) {
      console.error("Error fetching Notion data:", error);
    }
  };
  useEffect(()=>{
    fetchNotionData();
  },[]);

  return (
    <>
      <p>{classData && JSON.stringify(classData, null, 2)}</p>
    </>
  );
};

export default ClassDetails;
