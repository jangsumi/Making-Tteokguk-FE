import React from "react";
import * as styled from "./styles";


const Button = ({ active, text, onClickEvent }) => {
  return (
    <styled.ButtonContainer
      active={active}
      onClick={active? onClickEvent:undefined}
    >
      {text}
    </styled.ButtonContainer>
  );
};

export default Button;
