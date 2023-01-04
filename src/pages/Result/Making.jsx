import React, {useEffect, useState, useRef} from 'react';
import SyncLoader from "react-spinners/SyncLoader.js";
import {useLocation, useNavigate} from "react-router-dom";
import * as styled from "./styles";
import makingClose from "../../images/makingClose.svg";
import makingOpen from "../../images/makingOpen.svg";
import ResultModal from '../../components/Modal/ResultModal.jsx';
import tgStrange from "../../images/tgStrange.svg";
import tgIdeal from "../../images/tgIdeal.svg";
import tgMytaste from "../../images/tgMytaste.svg";
import tgSpicy from "../../images/tgSpicy.svg";
import tgOnlytteok from "../../images/tgOnlytteok.svg";
import tgOnlyegg from "../../images/tgOnlyegg.svg";
import tgBlack from "../../images/tgBlack.svg";
import tgFamilar from "../../images/tgFamiliar.svg";
import tgLove from "../../images/tgLove.svg";

const Making = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { userSelect, today } = location.state;
    const image = [makingOpen, makingClose];
    const [showImage, setShowImage] = useState(makingClose);
    const [showResult, setShowResult] = useState(false);
    const [tgIdx, setTgIdx] = useState(-1);
    const count = useRef(0);
    const tgType = [
        {text: '뭔가 맛이 익숙한 떡국', imageUrl: tgFamilar},
        {text: '사랑이 가득 담긴 떡국', imageUrl: tgLove},
        {text: '이상한 떡국', imageUrl: tgStrange},
        {text: '떡국이 떡만 있어서 떡국', imageUrl: tgOnlytteok},
        {text: '먹물 떡국', imageUrl: tgBlack},
        {text: '계란국을 빙자한 떡국', imageUrl: tgOnlyegg},
        {text: '매운 떡국', imageUrl: tgSpicy},
        {text: '취향이 보이는 떡국', imageUrl: tgMytaste},
        {text: '이상적인 떡국', imageUrl: tgIdeal},
    ]
    useEffect(() => {
        const loading = setInterval(() => {
            setShowImage(image[count.current % 2]);
            count.current += 1;
        }, 1000);
        if (count.current > 5) {
            setShowResult(true);
            return clearInterval(loading);
        }
        return () => clearInterval(loading);
    }, [showImage, count]);

    useEffect(()=>{
        const ingredient = userSelect.map((item)=>item.ingredientIndex);
        ingredient.sort();
        if (ingredient[3] == 6) setTgIdx(0);
        else if (today) setTgIdx(1);
        else if (ingredient[3] == 5 || ingredient[3] == 4) setTgIdx(2);
        else if (ingredient[1] === ingredient[2]) {
            if (ingredient[0] === ingredient[1] || ingredient[2] === ingredient[3]) setTgIdx(ingredient[1]+3);
        }
        else if (ingredient[0] === ingredient[1] && ingredient[2] === ingredient[3]) setTgIdx(7);
        else setTgIdx(8);
    },[]);

    const confirmEvent = () => {
        setShowResult(false);
        navigate('/result');
    }

    return (
        <styled.MakingContainer>
            <styled.PotImage imageUrl={showImage}/>
            <SyncLoader color="#DD7592" margin={4} size={12}/>
            {showResult && <ResultModal tg={tgType[tgIdx]} onConfirmClick={confirmEvent}/>}
        </styled.MakingContainer>
    );
};

export default Making;
