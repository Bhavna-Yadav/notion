import React, { useEffect, useState } from "react";
import { Grid, Button, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Home() {
  const [notionData, setNotionData] = useState(null);

  const fetchNotionData = async () => {
    try {
      const response = await fetch(`http://localhost:3003/api/1386e4c7a7a94edbbc5f6a141be6f68b`);

      const data = await response.json();
      console.log(data.results);
      setNotionData(data.results);
    } catch (error) {
      console.error("Error fetching Notion data:", error);
    }
  };

  useEffect(() => {
    fetchNotionData();
  },[]);

  return (
    <>
      {notionData?.map((block) => {
        return (
          <RouterLink key={block.id} to={`page/${block.id}`}>
            <Typography>
              {block[block.type]?.rich_text?.[0]?.plain_text}
            </Typography>
          </RouterLink>
        );
      })}
    </>
  );
}

export default Home;
