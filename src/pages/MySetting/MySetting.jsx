import React, { useState } from "react";
import * as styled from "./styles";
import {useNavigate} from "react-router-dom";



const MySetting = () => {
  const navigate = useNavigate();
  const nowcolor = "";
  const [color, setColor] = useState("#CFCFCF");

  const onClick = () =>{
    color === "#CFCFCF" ? setColor("#E0AEBC") : setColor("#CFCFCF");
  };
  
  return (
      <styled.Container>
        <styled.Wrapper>
          <styled.TextContainer>
            <styled.MainText>덕담 개수 공개 여부</styled.MainText>
            <styled.MsgPubTxt>{`다른 사람에게\n받은 덕담의 개수를 공개할까요?`}</styled.MsgPubTxt>
          </styled.TextContainer>
          <styled.ExMarkContainer>
            <styled.ExMarkImg/>
            <styled.MsgPubInfo>공개할 때만 남이 내 냉장고를 열어볼 수 있어요.</styled.MsgPubInfo>
          </styled.ExMarkContainer>
          <styled.BtnContainer>
            <styled.PubBtn
              color = {color} onClick={onClick}>공개 할래요!</styled.PubBtn>
            <styled.PrvBtn 
              color = {color} onClick={onClick}>나만 볼래요.</styled.PrvBtn>
          </styled.BtnContainer>
          <styled.CenterLine/>
          <styled.AgreeContainer>
            <styled.AgreeTxt>약관 동의</styled.AgreeTxt>
            <styled.GroupContainer>  
              <styled.CheckBox1 
                onClick={()=>navigate(pageName)}/>
              <styled.CheckBtn1Img/>
              <styled.AgreeAll>전체 동의</styled.AgreeAll>
            </styled.GroupContainer>

            <styled.GroupContainer>
              <styled.CheckBox2
                onClick={()=>navigate(pageName)}/>
              <styled.CheckBtn2Img/>
              <styled.AgeCheck>(필수) 만 14세 이상이예요.</styled.AgeCheck>
            </styled.GroupContainer>

            <styled.GroupContainer>
              <styled.CheckBox3
                onClick={()=>navigate(pageName)}/>
              <styled.CheckBtn3Img/>
              <styled.Agree>(필수) 이용약관 및 개인정보수집이용에 동의해요.</styled.Agree>
            </styled.GroupContainer>

          </styled.AgreeContainer>
          <styled.BtnContainer>
            <styled.PrevBtn 
              onClick={()=>navigate('/init')}>이전</styled.PrevBtn>
            <styled.NextBtn 
              onClick={()=>navigate('/refrigerator')}>시작하기</styled.NextBtn>
          </styled.BtnContainer>
        </styled.Wrapper>
      </styled.Container>
  );
};

export default MySetting;