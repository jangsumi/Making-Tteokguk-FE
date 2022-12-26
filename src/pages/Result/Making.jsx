import React, {useEffect, useState, useRef} from 'react';
import SyncLoader from "react-spinners/SyncLoader.js";
import {useNavigate} from "react-router-dom";
import * as styled from "./styles";
import makingClose from "../../images/makingClose.svg";
import makingOpen from "../../images/makingOpen.svg";
import ResultModal from '../../components/Modal/ResultModal.jsx'

const Making = () => {
    const image = [makingOpen, makingClose];
    const [showImage, setShowImage] = useState(makingClose);
    const [showResult, setShowResult] = useState(false);
    const count = useRef(0);
    const navigate = useNavigate();

    useEffect(() => {
        const loading = setInterval(() => {
            console.log(count.current);
            setShowImage(image[count.current % 2]);
            count.current += 1;
        }, 1000);
        if (count.current > 5) {
            setShowResult(true);
            return clearInterval(loading);
        }
        return () => clearInterval(loading);
    }, [showImage, count]);

    const confirmEvent = () => {
        setShowResult(false);
        navigate('/result');
    }

    return (
        <styled.MakingContainer>
            <styled.PotImage imageUrl={showImage}/>
            <SyncLoader color="#DD7592" margin={4} size={12}/>
            {showResult && <ResultModal onConfirmClick={confirmEvent}/>}
        </styled.MakingContainer>
    );
};

export default Making;
