import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import {useNavigate} from "react-router-dom";
import checked from '../../images/Checked.svg';
import unChecked from '../../images/UnChecked.svg';



const MySetting = () => {
  const navigate = useNavigate();
  const [pubCheck, setPubCheck] = useState("false");
  const [pubSel, setPubsel] = useState("false");
  const [color, setColor] = useState("#CFCFCF");
  const [color2, setColor2] = useState("#CFCFCF");
  const pubBtn = (e) => {
    setPubCheck(true);
    setColor("#E0AEBC");
    setColor2("#CFCFCF");
    setPubsel(true);
  
  };

  const prvBtn = (e) => {
    setPubCheck(false);
    setColor("#CFCFCF");
    setColor2("#E0AEBC");
    setPubsel(true);
  };

  const checkActive = (pubSel) => {
    if (pubSel === true && check1 === true || pubSel === true && (check2 === true && check3 === true)){
      return true;
    }
    else{
      return false;
    }
  }
  //Y는 체크된 경우 , N은 체크 안된경우
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(true);
  const [check3, setCheck3] = useState(true);
  const [allCheck, setAllCheck] = useState(false);
  const checkBox1 = () =>{
    if (check1 === true){
      setCheck1(false);
      setCheck2(false);
      setCheck3(false);
      setAllCheck(false);
      console.log("1번 체크 : ",check1);
    } else if (check1 === false){
      setCheck1(true);
      setCheck2(true);
      setCheck3(true);
      setAllCheck(true);
      console.log("1번 체크 : ",check1);
    }

  };

  const checkBox2 = () => {
    if (check2 === true){
      setCheck2(false);
      if (setAllCheck() === true)
      {
        setAllCheck(false);
        setCheck1(false);
        console.log("체크해제");
      }
      console.log("2번 체크 : ",check2);
    } else if (check2 === false){
      setCheck2(true);
      console.log("2번 체크 : ",check2);
    }
  };

  const checkBox3 = () =>{
    if (check3 === true){
      setCheck3(false);
      console.log("3번 체크 : ",check3);

    } else if (check3 === false){
      setCheck3(true);
      console.log("3번 체크 : ",check3);
    }
  };


  return (
      <styled.Container>
        <styled.Wrapper>
          <styled.MainText>덕담 개수 공개 여부</styled.MainText>
          <styled.MsgPubTxt>{`다른 사람에게\n받은 덕담의 개수를 공개할까요?`}</styled.MsgPubTxt>
          <styled.ExMarkContainer>
            <styled.ExMarkImg/>
            <styled.MsgPubInfo>공개할 때만 남이 내 냉장고를 열어볼 수 있어요.</styled.MsgPubInfo>
          </styled.ExMarkContainer>
          <styled.BtnContainer>
            <styled.PubBtn
              color = {color} 
              onClick={pubBtn}
              >공개 할래요!
              </styled.PubBtn>
            <styled.PrvBtn 
              color = {color2} 
              onClick={prvBtn}
              >나만 볼래요.</styled.PrvBtn>
          </styled.BtnContainer>
          <styled.CenterLine/>
          <styled.AgreeTxt>약관 동의</styled.AgreeTxt>
          <styled.GroupContainer>
            <styled.CheckBtn1Img
            ischecked1 = {check1}
            onClick = {()=>checkBox1()}
            value = {check1}
            url = {check1 === true ? {checked} : {unChecked}}
            />
            <styled.AgreeAll>전체 동의</styled.AgreeAll>
          </styled.GroupContainer>
          <styled.GroupContainer>
            <styled.CheckBtn2Img
            ischecked2 = {check2}
            onClick = {()=>checkBox2()}
            url = {check2 === true ? {checked} : {unChecked}}
            />
            <styled.AgeCheck>(필수) 만 14세 이상이예요.</styled.AgeCheck>
          </styled.GroupContainer>
          <styled.GroupContainer>
            <styled.CheckBtn3Img
            ischecked3 = {check3}
            onClick = {()=>checkBox3()}
            url = {check3 === true ? {checked} : {unChecked}}
            />
            <styled.Agree>(필수) 이용약관 및 개인정보수집이용에 동의해요.</styled.Agree>
          </styled.GroupContainer>
          <styled.BtnContainer>
            <styled.PrevBtn
              active={true}
              onClick={() => {
                navigate('/init');
              }}
            >
              {"이전"}
            </styled.PrevBtn>
            <styled.NextBtn
              active={checkActive(pubSel)}
              onClick={() => {
                checkActive(pubSel) && navigate('/refrigerator');
              }}
            >
              {"시작하기"}
            </styled.NextBtn>
          </styled.BtnContainer>
        </styled.Wrapper>
      </styled.Container>
  );
};

export default MySetting;