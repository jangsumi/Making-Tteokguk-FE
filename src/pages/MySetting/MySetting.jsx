import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import { useNavigate } from "react-router-dom";

const MySetting = () => {
  const navigate = useNavigate();
  const [pubCheck, setPubCheck] = useState(false);
  const [pubSel, setPubsel] = useState(false);
  const [color, setColor] = useState("#CFCFCF");
  const [color2, setColor2] = useState("#CFCFCF");

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  useEffect(() => {
    if (check2 && check3) {
      setCheck1(true);
    } else {
      setCheck1(false);
    }
  }, [check2, check3]);

  const pubBtn = (e) => {
    setColor("#E0AEBC");
    setColor2("#CFCFCF");
    setPubsel(true);
    setPubCheck(true);
  };

  const prvBtn = (e) => {
    setColor("#CFCFCF");
    setColor2("#E0AEBC");
    setPubsel(false);
    setPubCheck(true);
  };

  return (
    <styled.FlexBox direction={"column"} alignItems={"center"}>
      <styled.FlexBox direction={"column"}>
        <styled.FlexBox direction={"column"}>
          <styled.TextDiv fontSize={"20px"} margin={"40px 0px 0px 0px"}>
            덕담 개수 공개 여부
          </styled.TextDiv>
          <styled.TextDiv fontSize={"16px"} margin={"11px 0px 6px 0px"}>
            다른 사람에게
            <br />
            받은 덕담의 개수를 공개할까요?
          </styled.TextDiv>
        </styled.FlexBox>
        <styled.FlexBox alignItems={"center"} gap={"6px"}>
          <styled.ExMarkImg />
          <styled.TextDiv fontSize={"12px"}>
            공개할 때만 남이 내 냉장고를 열어볼 수 있어요.
          </styled.TextDiv>
        </styled.FlexBox>
        <styled.FlexBox
          alignItems={"center"}
          gap={"19px"}
          margin={"6px 0px 0px 0px"}
        >
          <styled.PubBtn color={color} onClick={pubBtn}>
            공개할래요!
          </styled.PubBtn>
          <styled.PrvBtn color={color2} onClick={prvBtn}>
            나만 볼래요.
          </styled.PrvBtn>
        </styled.FlexBox>
        <styled.CenterLine />
        <styled.TextDiv fontSize={"20px"} margin={"40px 0px 10px 0px"}>
          약관 동의
        </styled.TextDiv>
        <styled.FlexBox alignItems={"center"} gap={"10px"}>
          <styled.CheckBtn
            onClick={() => {
              if (check1) {
                setCheck2(false);
                setCheck3(false);
              } else {
                setCheck2(true);
                setCheck3(true);
              }
            }}
            isChecked={check1}
          />
          <styled.TextDiv fontSize={"14px"}>전체 동의</styled.TextDiv>
        </styled.FlexBox>
        <styled.FlexBox
          alignItems={"center"}
          gap={"10px"}
          margin={"20px 0px 6px 0px"}
        >
          <styled.CheckBtn
            onClick={() => setCheck2(!check2)}
            isChecked={check2}
          />
          <styled.TextDiv fontSize={"14px"}>
            (필수) 만 14세 이상이에요.
          </styled.TextDiv>
        </styled.FlexBox>
        <styled.FlexBox alignItems={"center"} gap={"10px"}>
          <styled.CheckBtn
            onClick={() => setCheck3(!check3)}
            isChecked={check3}
          />
          <styled.TextDiv fontSize={"14px"}>
            (필수) 이용약관 및 개인정보 수집 이용에 동의해요.
          </styled.TextDiv>
        </styled.FlexBox>
        <styled.FlexBox gap={"10px"}>
          <styled.PrevBtn
            active={true}
            onClick={() => {
              navigate("/init");
            }}
          >
            이전
          </styled.PrevBtn>
          <styled.NextBtn
            active={check1 && pubCheck}
            onClick={() => {
              check1 && pubCheck && navigate("/refrigerator");
            }}
          >
            시작하기
          </styled.NextBtn>
        </styled.FlexBox>
      </styled.FlexBox>
    </styled.FlexBox>
  );
};

export default MySetting;
