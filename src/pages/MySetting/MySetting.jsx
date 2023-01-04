import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import {useNavigate} from "react-router-dom";

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
    if (pubSel === true && check1Y === true || pubSel === true && (check2Y === true && check3Y === true)){
      return true;
    }
    else{
      return false;
    }
  }
  //Y는 체크된 경우 , N은 체크 안된경우
  const [check1Y, setCheck1Y] = useState(false);
  const [check1N, setCheck1N] = useState(true);
  const [check2Y, setCheck2Y] = useState(false);
  const [check2N, setCheck2N] = useState(true);
  const [check3Y, setCheck3Y] = useState(false);
  const [check3N, setCheck3N] = useState(true);

  const checkBox1 = () =>{
    if (check1Y === true){
      setCheck1Y(false);
      setCheck1N(true);
      setCheck2Y(false);
      setCheck2N(true);
      setCheck3Y(false);
      setCheck3N(true);
    } else if (check1Y === false){
      setCheck1Y(true);
      setCheck1N(false);
      setCheck2Y(true);
      setCheck2N(false);
      setCheck3Y(true);
      setCheck3N(false);

    }

  };

  const checkBox2 = () => {
    if (check2Y === true){
      setCheck2Y(false);
      setCheck2N(true);

    } else if (check2Y === false){
      setCheck2Y(true);
      setCheck2N(false);

    }
  };

  const checkBox3 = () =>{
    if (check3Y === true){
      setCheck3Y(false);
      setCheck3N(true);

    } else if (check3Y === false){
      setCheck3Y(true);
      setCheck3N(false);

    }
  };


  return (
      <styled.Container>
          <styled.MainText>덕담 개수 공개 여부</styled.MainText>
          <styled.MsgPubTxt>{`다른 사람에게\n받은 덕담의 개수를 공개할까요?`}</styled.MsgPubTxt>
          <styled.ExMarkContainer>
            <styled.ExMarkImg/>
            <styled.MsgPubInfo>공개할 때만 남이 내 냉장고를 열어볼 수 있어요.</styled.MsgPubInfo>
          </styled.ExMarkContainer>
          <styled.BtnContainer marginTop={"20px"}>
            <styled.PubPrvBtn
              color = {color}
              onClick={pubBtn}
              >공개 할래요!
              </styled.PubPrvBtn>
            <styled.PubPrvBtn
              color = {color2}
              onClick={prvBtn}
              >나만 볼래요.</styled.PubPrvBtn>
          </styled.BtnContainer>
          <styled.CenterLine/>
          <styled.MainText>약관 동의</styled.MainText>
          <styled.GroupContainer>
            <styled.CheckBtn1Img
            ischecked1 = {check1Y}
            onClick = {()=>checkBox1()}
            />
            <styled.UnCheckBtn1Img
            ischecked1 = {check1N}
            onClick = {()=>checkBox1()}
            />
            <styled.AgreeAll>전체 동의</styled.AgreeAll>
          </styled.GroupContainer>
          <styled.GroupContainer>
            <styled.CheckBtn2Img
            ischecked2 = {check2Y}
            onClick = {()=>checkBox2()}
            />
            <styled.UnCheckBtn2Img
            ischecked2 = {check2N}
            onClick = {()=>checkBox2()}
            />
            <styled.AgeCheck>(필수) 만 14세 이상이예요.</styled.AgeCheck>
          </styled.GroupContainer>
          <styled.GroupContainer>
            <styled.CheckBtn3Img
            ischecked3 = {check3Y}
            onClick = {()=>checkBox3()}
            />
            <styled.UnCheckBtn3Img
            ischecked3 = {check3N}
            onClick = {()=>checkBox3()}
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
                navigate('/refrigerator');
              }}
            >
              {"시작하기"}
            </styled.NextBtn>
          </styled.BtnContainer>
      </styled.Container>
  );
};

export default MySetting;
