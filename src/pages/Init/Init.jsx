import React, { useState } from "react";
import * as styled from "./styles";
import Button from "../../components/Button/Button";


const Init = () => {
  const [nickName, setNickName] = useState('');
  const onChange = (e) =>{
    setNickName(e.target.value.slice(0,6));
  }

  const checkActive = (nickName) =>{
    if ((nickName === "") || (nickName.charAt(0) === " ") || 
    (nickName.charAt(nickName.length-1) === " ")){
      return false;
    }
    else{
      return true;
    }
  }
  return (
      <styled.Container>
        <styled.Wrapper>
          <styled.MainText>{`친구가 나를 알아볼 수 있도록\n별명을 정해주세요`}.</styled.MainText>
          <styled.BtnContainer>
            <styled.WhiteBtn>
              <styled.NickNameInput 
                input type="text" 
                maxLength='6' 
                onChange={onChange}
                value = {nickName || ''}/>
            </styled.WhiteBtn>
            <styled.WhosRefTxt>님의 냉장고</styled.WhosRefTxt>
          </styled.BtnContainer>
          <styled.SelectRefColTxt>냉장고 색상을 선택하세요.</styled.SelectRefColTxt>
          <styled.RefBgTop RefBg = "#F5F5F5">
            <styled.RefBgBtm>
              <styled.RefContainer>
                <styled.RefColor backgroundColor="#D9D9D9">
                  <styled.CheckBtnImg/>
                </styled.RefColor>
                <styled.RefColor backgroundColor="#5E5E5E"/>
                <styled.RefColor backgroundColor="#FFE5A0"/>
                <styled.RefColor backgroundColor="#A5AEFF"/>
              </styled.RefContainer>
            </styled.RefBgBtm>
            <styled.WhiteRefImg/>
          </styled.RefBgTop>
          <Button 
          active={checkActive(nickName)}
          text = "다음" 
          pageName="/mysetting"
          />
        </styled.Wrapper>
      </styled.Container>
  );
};

export default Init;