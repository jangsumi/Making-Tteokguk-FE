import React from "react";
import * as styled from "./styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Delivery from "./pages/Delivery/Delivery";
import Delivery2 from "./pages/Delivery2/Delivery2";
import Main from "./pages/Main/Main";
import MyInfo from "./pages/MyInfo/MyInfo";
import SelectIngredient from "./pages/SelectIngredient/SelectIngredient.jsx";
import Refrigerator from "./pages/Refrigerator/Refrigerator.jsx"
import Making from "./pages/Result/Making.jsx";
import Result from "./pages/Result/Result.jsx";
import ModalExample from "./components/Modal/ModalExample.jsx";

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
            <Route path="/myinfo" element={<MyInfo />} />
            <Route path="/selectIngredient" element={<SelectIngredient/>} />
            <Route path="/refrigerator" element={<Refrigerator/>} />
            <Route path="/making" element={<Making/>} />
            <Route path="/result" element={<Result/>} />
            <Route path="/modal" element={<ModalExample/>} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/delivery2" element={<Delivery2 />} />
          </Routes>
        </BrowserRouter>
      </div>
      <styled.Line />
    </>
  );
};

export default App;
