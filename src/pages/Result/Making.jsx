import React, {useEffect, useState, useRef} from 'react';
import SyncLoader from "react-spinners/SyncLoader.js";
import {useLocation, useNavigate} from "react-router-dom";
import * as styled from "./styles";
import makingClose from "../../images/makingClose.svg";
import makingOpen from "../../images/makingOpen.svg";
import ResultModal from '../../components/Modal/ResultModal.jsx';

const Making = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { message, tgType } = location.state || false;
    const image = [makingOpen, makingClose];
    const [showImage, setShowImage] = useState(makingClose);
    const [showResult, setShowResult] = useState(false);
    const count = useRef(0);

    useEffect(() => {
        const loading = setInterval(() => {
            setShowImage(image[count.current % 2]);
            count.current += 1;
        }, 1000);
        if (count.current > 3) {
            setShowResult(true);
            return clearInterval(loading);
        }
        return () => clearInterval(loading);
    }, [showImage, count]);

    useEffect(()=> {
        if (!message) navigate('/SelectIngredient')
    },[]);

    const confirmEvent = () => {
        setShowResult(false);
        navigate('/result', {state: {message}});
    }

    return (
        <styled.MakingContainer>
            <styled.PotImage imageUrl={showImage}/>
            <SyncLoader color="#DD7592" margin={4} size={12}/>
            {showResult && <ResultModal tg={tgType} onConfirmClick={confirmEvent}/>}
        </styled.MakingContainer>
    );
};

export default Making;
