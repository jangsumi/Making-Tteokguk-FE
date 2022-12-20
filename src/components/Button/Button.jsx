import React from 'react';
import * as styled from "./styles";
import {useNavigate} from "react-router-dom";

const Button = ({text, pageName}) => {
    const navigate = useNavigate();

    return (
        <styled.ButtonContainer onClick={()=>navigate(pageName)}>
            {text}
        </styled.ButtonContainer>
    );
};

export default Button;
