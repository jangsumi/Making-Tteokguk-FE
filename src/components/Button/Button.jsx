import React from 'react';
import * as styled from "./styles";

const Button = ({text, onButtonClick}) => {
    return (
        <styled.ButtonContainer onClick={onButtonClick}>
            {text}
        </styled.ButtonContainer>
    );
};

export default Button;
