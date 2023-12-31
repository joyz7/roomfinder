import React from "react";
import Title from "./components/Title";
import { Routes, Route } from "react-router-dom";
import Buildinglayout from "./components/BuildingLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Title />}></Route>
        <Route
          path="/buildinglayout/:name"
          element={<Buildinglayout />}
        ></Route>
        {/* use useParams() to access the name of the building being passed to the building layout component */}
      </Routes>
    </>
  );
}

export default App;
