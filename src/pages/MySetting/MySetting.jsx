import React, { useState } from "react";
import * as styled from "./styles";



const MySetting = () => {
  return (
      <styled.Container>
        <styled.Wrapper>
          <styled.TextContainer>
            <styled.MainText>덕담 개수 공개 여부</styled.MainText>
            <styled.MsgPubTxt>다른 사람에게 받은 덕담의 개수를 공개할까요?</styled.MsgPubTxt>
          </styled.TextContainer>
          <styled.ExmarkContainer>
            <styled.ExMarkImg></styled.ExMarkImg>
            <styled.MsgPubInfo>공개할 때만 남이 내 냉장고를 열어볼 수 있어요.</styled.MsgPubInfo> 
          </styled.ExmarkContainer>
          <styled.MsgPubBtnContainer>
            <styled.PubBtn 
              onClick={()=>navigate(pageName)}>공개 할래요!</styled.PubBtn>
            <styled.PrvBtn 
              onClick={()=>navigate(pageName)}>나만 볼래요.</styled.PrvBtn>
          </styled.MsgPubBtnContainer>
          
          <styled.AgreeContainer>
            <styled.CenterLine></styled.CenterLine>
            <styled.AgreeTxt>약관 동의</styled.AgreeTxt>
            <styled.CheckBox1 
              onClick={()=>navigate(pageName)}></styled.CheckBox1>
            <styled.CheckBtn1Img></styled.CheckBtn1Img>
            <styled.AgreeAll>전체 동의</styled.AgreeAll>
            <styled.CheckBox2
              onClick={()=>navigate(pageName)}></styled.CheckBox2>
            <styled.CheckBtn2Img></styled.CheckBtn2Img>
            <styled.AgeCheck>(필수) 만 14세 이상이예요.</styled.AgeCheck>
            <styled.CheckBox3
              onClick={()=>navigate(pageName)}></styled.CheckBox3>
            <styled.CheckBtn3Img></styled.CheckBtn3Img>
            <styled.Agree>(필수) 이용약관 및 개인정보수집이용에 동의해요.</styled.Agree>
          </styled.AgreeContainer>
          <styled.PrevBtn 
            onClick={()=>navigate(pageName)}>이전</styled.PrevBtn>
          <styled.NextBtn 
            onClick={()=>navigate(pageName)}>시작하기</styled.NextBtn>

        </styled.Wrapper>
      </styled.Container>




    
  );
};

export default MySetting;