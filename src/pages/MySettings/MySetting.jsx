import BackGround from './BackGround.svg';
import CheckBtnBlack from './CheckBtnBlack.svg';
import ExMark from './ExMark.svg';

import React, { useState } from "react";
import * as styled from "./styles";



const Init = () => {
  return (
    <styled.MainBackGround>
      <styled.BackGroundImg><img src = {BackGround} alt = "backgroundimg" />
        <styled.MainText>덕담 개수 공개 여부</styled.MainText>
        <styled.MsgPubTxt>다른 사람에게 받은 덕담의 개수를 공개할까요?</styled.MsgPubTxt>
        <styled.ExMarkImg><img src = {ExMark} alt = "ExMark"/></styled.ExMarkImg>
        <styled.MsgPubInfo>공개할 때만 남이 내 냉장고를 열어볼 수 있어요.</styled.MsgPubInfo>
        <styled.PubBtn></styled.PubBtn>
        <styled.PubBtnTxt>공개 할래요!</styled.PubBtnTxt>
        <styled.PrvBtn></styled.PrvBtn>
        <styled.PrvBtnTxt>나만 볼래요.</styled.PrvBtnTxt>
        <styled.CenterLine></styled.CenterLine>
        <styled.AgreeTxt>약관 동의</styled.AgreeTxt>

        <styled.CheckBox1></styled.CheckBox1>
        <styled.CheckBtn1Img><img src = {CheckBtnBlack} alt = "checkbtnimg" /></styled.CheckBtn1Img>
        <styled.AgreeAll>전체 동의</styled.AgreeAll>
        <styled.CheckBox2></styled.CheckBox2>
        <styled.CheckBtn2Img><img src = {CheckBtnBlack} alt = "checkbtnimg" /></styled.CheckBtn2Img>
        <styled.AgeCheck>(필수) 만 14세 이상이예요.</styled.AgeCheck>
        <styled.CheckBox3></styled.CheckBox3>
        <styled.CheckBtn3Img><img src = {CheckBtnBlack} alt = "checkbtnimg" /></styled.CheckBtn3Img>
        <styled.Agree>(필수) 이용약관 및 개인정보수집이용에 동의해요.</styled.Agree>
        <styled.GreyBtn></styled.GreyBtn>
        <styled.GreyBtnTxt>시작하기</styled.GreyBtnTxt>
      </styled.BackGroundImg>
      
    </styled.MainBackGround>



    
  );
};

export default Init;