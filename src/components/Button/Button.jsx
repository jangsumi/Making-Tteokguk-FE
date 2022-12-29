import React from "react";
import * as styled from "./styles";
import { useNavigate } from "react-router-dom";

const Button = ({ active, text, pageName, setShowModal }) => {
  const navigate = useNavigate();

  return (
    <styled.ButtonContainer
      active={active}
      onClick={() => {
        active && navigate(pageName);
        active && setShowModal(true);
      }}
    >
      {text}
    </styled.ButtonContainer>
  );
};

export default Button;
