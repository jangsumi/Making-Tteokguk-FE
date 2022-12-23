import React, { useState } from "react";
import * as styled from "./styles";
import { Fake } from "../MySetting/styles.jsx";
import {useNavigate} from "react-router-dom";

const Init = () => {
  const navigate = useNavigate();
  const nickname = {name : "여섯글자별명"};
  return (
    <div>
      <styled.Container>
        <styled.Wrapper>
          <styled.MainText>{`친구가 나를 알아볼 수 있도록\n별명을 정해주세요`}.</styled.MainText>
          <styled.BtnContainer>
            <styled.WhiteBtn>{nickname.name}</styled.WhiteBtn>
            <Fake></Fake>
            <styled.WhosRefTxt>님의 냉장고</styled.WhosRefTxt>
          </styled.BtnContainer>
          <styled.SelectRefColTxt>냉장고 색상을 선택하세요.</styled.SelectRefColTxt>
          <styled.RefContentContainer>
            <styled.RefBgTop/>
            <styled.RefBgBtm></styled.RefBgBtm>
            <styled.RefImgContainer>
              <styled.WhiteRefImg></styled.WhiteRefImg>
            </styled.RefImgContainer>
            <styled.RefContainer>
              <styled.RefColor backgroundColor="#D9D9D9"/>
              <styled.RefColor backgroundColor="#5E5E5E"/>
              <styled.RefColor backgroundColor="#FFE5A0"/>
              <styled.RefColor backgroundColor="#A5AEFF"/>
            </styled.RefContainer>
              <styled.CheckBtnImg></styled.CheckBtnImg>
          </styled.RefContentContainer>
          <styled.NextBtn onClick={()=>navigate('/mysetting')}>다음</styled.NextBtn>
        </styled.Wrapper>
      </styled.Container>
    </div>  


    
  );
};

export default Init;