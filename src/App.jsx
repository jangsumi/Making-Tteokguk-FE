import React from "react";
import {RecoilRoot} from 'recoil';
import * as styled from "./styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Delivery from "./pages/Delivery/Delivery";
import Delivery2 from "./pages/Delivery2/Delivery2";
import Main from "./pages/Main/Main";
import MyInfo from "./pages/MyInfo/MyInfo";
import SelectIngredient from "./pages/SelectIngredient/SelectIngredient.jsx";
import Refrigerator from "./pages/Refrigerator/Refrigerator.jsx";
import Making from "./pages/Result/Making.jsx";
import Result from "./pages/Result/Result.jsx";
import CannotFind from "./pages/CannotFind/CannotFind.jsx";
import Init from "./pages/Init/Init.jsx";
import MySetting from "./pages/MySetting/MySetting.jsx";
import ScrollToTop from "./ScrollToTop";

const App = () => {

  return (
  <RecoilRoot>
      <styled.Line />
      <div
        id="scrollbar"
        className="App"
        style={{
          margin: "0 auto",
          height: "calc(100vh - 80px)",
          width: "auto",
          position: "relative",
          wordBreak: "keep-all",
          overflowY: "auto",
          overflowX: "hidden"
        }}
      >
        <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/myinfo" element={<MyInfo />} />
            <Route path="/selectIngredient" element={<SelectIngredient />} />
            <Route path="/refrigerator/:id" element={<Refrigerator />} />
            <Route path="/making" element={<Making />} />
            <Route path="/result" element={<Result />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/delivery2" element={<Delivery2 />} />
            <Route path="/init" element={<Init />} />
            <Route path="/mysetting" element={<MySetting />} />
            <Route path="*" element={<CannotFind />} />
          </Routes>
        </BrowserRouter>
      </div>
      <styled.Line />
    </RecoilRoot>
  );
};

export default App;
