import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as styled from "./styles";
import Main from "./pages/Main/Main";
import SelectIngredient from "./pages/SelectIngredient/SelectIngredient.jsx";
import Making from "./pages/Result/Making.jsx";
import Result from "./pages/Result/Result.jsx";

const App = () => {
  return (
    <>
      <styled.Line />
      <div
        className="App"
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          minHeight: "calc(100vh - 80px)",
          width: "auto",
          position: "relative",
          wordBreak: "keep-all",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/selectIngredient" element={<SelectIngredient/>} />
            <Route path="/making" element={<Making/>} />
            <Route path="/result" element={<Result/>} />
          </Routes>
        </BrowserRouter>
      </div>
      <styled.Line />
    </>
  );
};

export default App;
