import React from 'react';
import * as styled from "./styles";
import {useNavigate} from "react-router-dom";

const Button = ({active, text, pageName}) => {
    const navigate = useNavigate();

    return (
        <styled.ButtonContainer active={active}
                                onClick={()=>active&&navigate(pageName)}>
            {text}
        </styled.ButtonContainer>
    );
};

export default Button;
