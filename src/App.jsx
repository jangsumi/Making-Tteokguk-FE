import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";

const App = () => {
  return (
    <div
      className="App"
      style={{
        maxWidth: "430px",
        margin: "0 auto",
        minHeight: "100%",
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
  );
};

export default App;
