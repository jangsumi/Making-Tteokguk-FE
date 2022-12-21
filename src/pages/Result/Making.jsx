import React, {useEffect, useState, useRef} from 'react';
import SyncLoader from "react-spinners/SyncLoader.js";
import * as styled from "./styles";
import makingClose from "../../images/makingClose.svg";
import makingOpen from "../../images/makingOpen.svg";
import {useNavigate} from "react-router-dom";

const Making = () => {
    const image = [makingOpen, makingClose];
    const [showImage, setShowImage] = useState(makingClose);
    const count = useRef(0);
    const navigate = useNavigate();

    useEffect(() => {
        const loading = setInterval(() => {
            setShowImage(image[count.current % 2]);
            count.current += 1;
        }, 1000);
        setTimeout(() => navigate('/result'), 10000);
        return () => clearInterval(loading);
    }, [showImage, count]);

    return (
        <styled.ResultContainer>
            <styled.PotImage imageUrl={showImage}/>
            <SyncLoader color="#B9B9B9" margin={6} size={10}/>
        </styled.ResultContainer>
    );
};

export default Making;
