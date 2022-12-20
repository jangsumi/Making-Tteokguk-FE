import React from "react";
import { useNavigate } from "react-router-dom";
import * as styled from "./styles";

const TopBar = ({ titleName, setDisplayRecipe }) => {
  const navigate = useNavigate()

  return (
    <styled.TopBarContainer>
      <styled.ButtonBack
        onClick={() => {
          navigate(-1);
        }}
      />
      <styled.Title>{titleName}</styled.Title>
      <styled.ButtonRecipe padding="9px" visibility={setDisplayRecipe}>
        조리법
      </styled.ButtonRecipe>
    </styled.TopBarContainer>
  );
};

export default TopBar;
