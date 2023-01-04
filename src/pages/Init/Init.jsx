import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as styled from "./styles";
import Button from "../../components/Button/Button";

const Init = () => {
  const RefColor =
    [{id : 1, rColor : "#D9D9D9"},
    {id : 2, rColor : "#5E5E5E"},
    {id : 3, rColor : "#FFE5A0"},
    {id : 4, rColor : "#A5AEFF"}]
  const [nickName, setNickName] = useState('');
  const navigate = useNavigate();

  const onChange = (e) =>{
    setNickName(e.target.value.slice(0,6));
  }
  const checkNickName = (nickName) =>{
    if(nickName.length >= 6) {
      return nickName.slice(0, 6);
    }
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

  const onButtonClick = () => {
    navigate('/mysetting');
    console.log({ nickName })
  }

  const [RefCol, setRefCol] = useState(1);

  const onClick = (n) => {
    if (n===1){
      setRefCol(1);
      console.log("RefCol : ",RefCol);
    }
    else if (n===2){
      setRefCol(2);
      console.log("RefCol : ",RefCol);
    }
    else if (n===3){
      setRefCol(3);
      console.log("RefCol : ",RefCol);
    }
    else if (n===4){
      setRefCol(4);
      console.log("RefCol : ",RefCol);
    }

  }
  return (
      <styled.Container>
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
                <styled.RefColor 
                  backgroundColor="#D9D9D9"
                  onClick = {() => onClick(1)}
                  >
                  <styled.CheckBtnImg/>
                </styled.RefColor>
                <styled.RefColor 
                  backgroundColor="#5E5E5E"
                  onClick = {() => onClick(2)}
                  />
                <styled.RefColor 
                  backgroundColor="#FFE5A0"
                  onClick = {() => onClick(3)}
                 />
                <styled.RefColor
                  backgroundColor="#A5AEFF"
                  onClick = {() => onClick(4)}
                />
              </styled.RefContainer>
            </styled.RefBgBtm >
            <styled.WhiteRefImg refVisible = {RefCol}/>
            <styled.BlackRefImg refVisible = {RefCol}/>
            <styled.YellowRefImg refVisible = {RefCol}/>
            <styled.PurpleRefImg refVisible = {RefCol}/>
            
          </styled.RefBgTop>
          <Button
            active={checkActive(nickName)}
            text = "다음"
            onClickEvent={onButtonClick}
          />
      </styled.Container>
  );
};

export default Init;
