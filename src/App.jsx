import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import * as styled from "./styles";

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
          </Routes>
        </BrowserRouter>
      </div>
      <styled.Line />
    </>
  );
};

export default App;
