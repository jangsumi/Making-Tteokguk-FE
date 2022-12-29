import React, { useState } from "react";
import * as styled from "./styles";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button";


const Init = () => {
  const navigate = useNavigate();
  const RefColor = 
    [{id : 1, RCol : "#D9D9D9"},
    {id : 2, RCol : "#5E5E5E"},
    {id : 3, RCol : "#FFE5A0"},
    {id : 4, RCol : "#A5AEFF"}]
  const RefColorList = RefColor.map((Col)=><Init key = {Col.RCol} color = {Col.RCol}/>)
  const [NickName, setNickName] = useState('');
  const onChange = (e) =>{
    setNickName(e.target.value);
    console.log(e.target.value);
  }
  return (
      <styled.Container>
        <styled.Wrapper>
          <styled.MainText>{`친구가 나를 알아볼 수 있도록\n별명을 정해주세요`}.</styled.MainText>
          <styled.BtnContainer>
            <styled.WhiteBtn>
              <styled.NickNameInput 
                input type="text" 
                maxLength={6} 
                onChange={onChange}/>
            </styled.WhiteBtn>
            <styled.WhosRefTxt>{NickName}님의 냉장고</styled.WhosRefTxt>
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
          <styled.NextBtn onClick={()=>navigate('/mysetting')}>다음</styled.NextBtn>
          
        </styled.Wrapper>
      </styled.Container>
    


    
  );
};

export default Init;