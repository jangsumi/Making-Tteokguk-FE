import React, {useEffect} from "react";
import {RecoilRoot} from 'recoil';
import * as styled from "./styles";
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
import KakaoAuth from "./pages/Main/KakaoAuth";
import ScrollToTop from "./ScrollToTop";

const App = () => {
    useEffect(() => {
        let ins = document.createElement("ins");
        let scr = document.createElement("script");
        ins.className = "kakao_ad_area";
        ins.style = "display:none; width:100%;";
        scr.async = "true";
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        ins.setAttribute("data-ad-width", "320");
        ins.setAttribute("data-ad-height", "50");
        ins.setAttribute("data-ad-unit", "DAN-Upl9wVgl6ssGX0TT");
        document.querySelector(".adfit").appendChild(ins);
        document.querySelector(".adfit").appendChild(scr);
    }, []);

    return (
        <RecoilRoot>
            <styled.Container id="scrollbar">
                <styled.TopLine/>
                <BrowserRouter>
                    <ScrollToTop/>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/myinfo" element={<MyInfo/>}/>
                        <Route path="/selectIngredient" element={<SelectIngredient/>}/>
                        <Route path="/refrigerator/:id" element={<Refrigerator/>}/>
                        <Route path="/making" element={<Making/>}/>
                        <Route path="/result" element={<Result/>}/>
                        <Route path="/delivery" element={<Delivery/>}/>
                        <Route path="/delivery2" element={<Delivery2/>}/>
                        <Route path="/init" element={<Init/>}/>
                        <Route path="/mysetting" element={<MySetting/>}/>
                        <Route path="/api/user/kakao/callback/" element={<KakaoAuth/>}/>
                        <Route path="*" element={<CannotFind/>}/>
                    </Routes>
                </BrowserRouter>
                <styled.BottomLine/>
                <styled.BottomAD className="adfit" />
            </styled.Container>
        </RecoilRoot>
    );
};

export default App;
