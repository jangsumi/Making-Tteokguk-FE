import BackGround from './BackGround.svg';
import CheckBtn from './CheckBtn.svg';
import React, { useState } from "react";
import * as styled from "./styles";



const Init = () => {
  return (
    <styled.MainBackGround>
      <styled.BackGroundImg><img src = {BackGround} alt = "backgroundimg" />
        <styled.MainText>친구가 나를 알아볼 수 있도록 별명을 정해주세요.</styled.MainText>
        <styled.WhiteBtn></styled.WhiteBtn>
        <styled.WhiteBtnText>여섯글자별명</styled.WhiteBtnText>
        <styled.WhosRefTxt>님의 냉장고</styled.WhosRefTxt>
        <styled.SelectRefColTxt>냉장고 색상을 선택하세요.</styled.SelectRefColTxt>
        <styled.RefBgTop></styled.RefBgTop>
        <styled.RefFirst></styled.RefFirst>
        <styled.RefBgBtm></styled.RefBgBtm>
        <styled.RefSecond></styled.RefSecond>
        <styled.RefThird></styled.RefThird>
        <styled.RefHandle></styled.RefHandle>
        <styled.RefGreyColor></styled.RefGreyColor>
        <styled.RefBlackColor></styled.RefBlackColor>
        <styled.RefYellowColor></styled.RefYellowColor>
        <styled.RefPurpleColor></styled.RefPurpleColor>
        <styled.GreyBtn></styled.GreyBtn>
        <styled.CheckBtnImg><img src = {CheckBtn} alt = "checkbtn"/></styled.CheckBtnImg>
        <styled.GreyBtnText>다음</styled.GreyBtnText>
      </styled.BackGroundImg>
      
    </styled.MainBackGround>



    
  );
};

export default Init;