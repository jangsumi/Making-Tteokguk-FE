import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import * as styled from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { createRef } from "../../axios/refrigerator-service.jsx";
import { IDState } from "../../atom.jsx";

const MySetting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { nickName, RefCol, kakaoId } = location.state || false;
  const [pubCheck, setPubCheck] = useState(false);
  const [pubSel, setPubsel] = useState(false);
  const [color, setColor] = useState("#CFCFCF");
  const [color2, setColor2] = useState("#CFCFCF");

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const [userID, setUserID] = useRecoilState(IDState);

  useEffect(() => {
    if (!nickName || RefCol === undefined || kakaoId === undefined) navigate("/init");
  }, []);

  useEffect(() => {
    if (check2 && check3) {
      setCheck1(true);
    } else {
      setCheck1(false);
    }
  }, [check2, check3]);

  const pubBtn = () => {
    setColor("#E0AEBC");
    setColor2("#CFCFCF");
    setPubsel(true);
    setPubCheck(true);
  };

  const prvBtn = () => {
    setColor("#CFCFCF");
    setColor2("#E0AEBC");
    setPubsel(false);
    setPubCheck(true);
  };

  const onBackClick = () => {
    navigate(`/init`, { state: { nickName, RefCol } });
  };

  const onStartClick = async () => {
    if (check1 && pubCheck) {
      console.log({ nickName, RefCol, pubSel });
      const body = {
        color: RefCol,
        kakaoId: kakaoId,
        nickname: nickName,
      };
      createRef(pubSel, body).then((r) => {
        console.log(r);
        setUserID({ ref: r.id, kakao: r.kakaoId, link: r.link });
        navigate(`/refrigerator/${r.link}`, { state: { isFirst: true } });
      });
    }
  };

  return (
    <styled.Container>
      <styled.TitleDiv>덕담 개수 공개 여부</styled.TitleDiv>
      <styled.TextDiv fontSize={16}>
        다른 사람에게
        <br />
        받은 덕담의 개수를 공개할까요?
      </styled.TextDiv>

      <styled.FlexBox gap={6} margin={"6px 0px 20px 0px"}>
        <styled.ExMarkImg />
        <styled.TextDiv fontSize={11}>
          공개할 때만 남이 내 냉장고를 열어볼 수 있어요.
        </styled.TextDiv>
      </styled.FlexBox>

      <styled.FlexBox gap={19}>
        <styled.PubPrvBtn color={color} onClick={pubBtn}>
          공개할래요!
        </styled.PubPrvBtn>
        <styled.PubPrvBtn color={color2} onClick={prvBtn}>
          나만 볼래요.
        </styled.PubPrvBtn>
      </styled.FlexBox>

      <styled.CenterLine />

      <styled.TitleDiv>약관 동의</styled.TitleDiv>
      <styled.CheckBoxContainer>
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
        <styled.TextDiv>전체 동의</styled.TextDiv>

        <styled.CheckBtn
          onClick={() => setCheck2(!check2)}
          isChecked={check2}
        />
        <styled.TextDiv>(필수) 만 14세 이상이에요.</styled.TextDiv>

        <styled.CheckBtn
          onClick={() => setCheck3(!check3)}
          isChecked={check3}
        />
        <styled.TextDiv>
          (필수) <a href="/">이용약관</a> 및 개인정보 수집 이용에 동의해요.
        </styled.TextDiv>
      </styled.CheckBoxContainer>

      <styled.ButtonWrapper>
        <styled.PrevBtn active={true} onClick={onBackClick}>
          이전
        </styled.PrevBtn>
        <styled.NextBtn active={check1 && pubCheck} onClick={onStartClick}>
          시작하기
        </styled.NextBtn>
      </styled.ButtonWrapper>
    </styled.Container>
  );
};

export default MySetting;
