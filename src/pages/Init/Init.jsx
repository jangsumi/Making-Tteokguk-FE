import React, { useState } from "react";
import * as styled from "./styles";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button";

// function CheckName = (NickName) =>{
//   if (NickName.size > 6)
// };
// 이거는 닉네임 길이가 6자가 넘어갈 경우를 대비해서 만들었는데 아직 미완입니당..

const Init = (props) => {
  const navigate = useNavigate();
  const RefColor = 
    [{id : 1, RCol : "#D9D9D9"},
    {id : 2, RCol : "#5E5E5E"},
    {id : 3, RCol : "#FFE5A0"},
    {id : 4, RCol : "#A5AEFF"}]
  const RefColorList = RefColor.map((Col)=><Init key = {Col.RCol} color = {Col.RCol}/>)
  var nickname = "";
  return (
      <styled.Container>
        <styled.Wrapper>
          <styled.MainText>{`친구가 나를 알아볼 수 있도록\n별명을 정해주세요`}.</styled.MainText>
          <styled.BtnContainer>
            <styled.WhiteBtn>
              <styled.NickNameInput input type="text" size="6" required="true"/>
            </styled.WhiteBtn>
            <styled.WhosRefTxt>님의 냉장고</styled.WhosRefTxt>
          </styled.BtnContainer>
          <styled.SelectRefColTxt>냉장고 색상을 선택하세요.</styled.SelectRefColTxt>
          <styled.RefContentContainer>
            <styled.RefBgTop/>
            <styled.RefBgBtm/>
            <styled.RefImgContainer>
              <styled.WhiteRefImg/>
            </styled.RefImgContainer>
            <styled.RefContainer>
 
              <styled.RefColor backgroundColor={props.RCol}/>
              
              {/* <styled.RefColor backgroundColor="#D9D9D9"/>
              <styled.RefColor backgroundColor="#5E5E5E"/>
              <styled.RefColor backgroundColor="#FFE5A0"/>
              <styled.RefColor backgroundColor="#A5AEFF"/> */}
              <styled.CheckBtnImg/>
            </styled.RefContainer>
          </styled.RefContentContainer>
          <styled.NextBtn onClick={()=>navigate('/mysetting')}>다음</styled.NextBtn>
        </styled.Wrapper>
      </styled.Container>
    


    
  );
};

export default Init;