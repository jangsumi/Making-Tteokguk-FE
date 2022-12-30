import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import {useNavigate} from "react-router-dom";




const MySetting = () => {
  const navigate = useNavigate();
  const nowcolor = "";
  const [color, setColor] = useState("#CFCFCF");
  const [checkedItems, setCheckedItems] = useState(new Set());
  const checkedItemHandler = (id, isChecked) => {
    if(isChecked){
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)){
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  }

  const [bChecked, setChecked] = useState(false);
  const checkHandler = ({target}) =>{
    setChecked(!bChecked);
    checkedItemHandler(issue.id, target.checked);
  }
  const onClick = () =>{
    color === "#CFCFCF" ? setColor("#E0AEBC") : setColor("#CFCFCF");
  };

  
  const [checkValue, setCheckValue] = useState('');
  function checkyn(id) {
    console.log('id',id);
    let checkPick = document.getElementsByName('checkWrap');
    Array.prototype.forEach.call(checkPick, function (el){
      console.log('el',el);
      el.checked = false;
    });

    id.target.checked = true;
    setCheckValue(id.target.defaultValue);
  }

  useEffect(()=>{
    console.log("체크박스 value",checkValue);
  }, [checkValue])


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
              color = {color} onClick={onClick}>공개 할래요!</styled.PubBtn>
            <styled.PrvBtn 
              color = {color} onClick={onClick}>나만 볼래요.</styled.PrvBtn>
          </styled.BtnContainer>
          <styled.CenterLine/>
          <styled.AgreeTxt>약관 동의</styled.AgreeTxt>
          <styled.GroupContainer>
            <styled.CheckBtn1Img></styled.CheckBtn1Img>
            <styled.AgreeAll>전체 동의</styled.AgreeAll>
          </styled.GroupContainer>
          <styled.GroupContainer>
            <styled.CheckBtn2Img></styled.CheckBtn2Img>
            <styled.AgeCheck>(필수) 만 14세 이상이예요.</styled.AgeCheck>
          </styled.GroupContainer>
          <styled.GroupContainer>
            <styled.CheckBtn3Img></styled.CheckBtn3Img>
            <styled.Agree>(필수) 이용약관 및 개인정보수집이용에 동의해요.</styled.Agree>
          </styled.GroupContainer>
          <styled.BtnContainer>
            <styled.PrevBtn onClick={()=>navigate('/init')}>이전</styled.PrevBtn>
            <styled.NextBtn onClick={()=>navigate('/refrigerator')}>시작하기</styled.NextBtn>
          </styled.BtnContainer>

        </styled.Wrapper>
      </styled.Container>
  );
};

export default MySetting;