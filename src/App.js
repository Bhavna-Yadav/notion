import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassDetails from './component/ClassDetails';
import Home from './component/Home';

function App() {

  return (
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:id" element={<ClassDetails />} />
        
      </Routes>
    </>
  );
}

export default App;
