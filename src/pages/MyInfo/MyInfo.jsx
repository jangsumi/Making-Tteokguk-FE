import React, { useState } from "react";
import Message from "../../components/Message/Message";
import TopBar from "../../components/TopBar/TopBar";
import * as styled from "./styles";
import tgStrange from "../../images/tgStrange.svg";
import tgIdeal from "../../images/tgIdeal.svg";
import tgMyTaste from "../../images/tgMyTaste.svg";
import tgSpicy from "../../images/tgSpicy.svg";
import tgOnlytteok from "../../images/tgOnlytteok.svg";
import tgOnlyegg from "../../images/tgOnlyegg.svg";
import tgBlack from "../../images/tgBlack.svg";

const Cooked = ({ unlock }) => {
  const infoTteokguk = [
    { index: 0, name: "이상적인 떡국", imgSrc: tgIdeal },
    { index: 1, name: "취향이 보이는 떡국", imgSrc: tgMyTaste },
    { index: 2, name: "계란국을 빙자한 떡국", imgSrc: tgOnlyegg },
    { index: 3, name: "먹물 떡국", imgSrc: tgBlack },
    { index: 4, name: "떡국이 떡만 있어서 떡국", imgSrc: tgOnlytteok },
    { index: 5, name: "매운 떡국", imgSrc: tgSpicy },
    { index: 6, name: "이상한 떡국", imgSrc: tgStrange },
  ];

  return (
    <styled.FlexBox>
      <styled.GridContainer>
        {infoTteokguk.map((item) => (
          <styled.FlexBox
            key={item.index}
            direction="column"
            gap="4px"
            aCenter={true}
          >
            <styled.Tteokguk background={item.imgSrc}>
              {!unlock[item.index] && <styled.TteockgukLock />}
            </styled.Tteokguk>
            <styled.FontDiv fontSize="12px">
              {unlock[item.index] ? item.name : "???"}
            </styled.FontDiv>
          </styled.FlexBox>
        ))}
      </styled.GridContainer>
    </styled.FlexBox>
  );
};

const MyInfo = () => {
  const unlock = [false, true, true, false, true];
  const [currPage, setCurrPage] = useState(0);
  const userMessage = [
    {
      username: "한",
      ingredient: "떡",
      content:
        "수미야 새해에도 행복한 일들만 가득하길 바랄게! 올해는 골골대지말고 건강하게 잘 지내보자ㅎㅎ",
    },
    {
      username: "두글",
      ingredient: "김",
      content: "수미야 새해에도 행복한 일들만 가득하길 바랄게! ",
    },
    {
      username: "세글자",
      ingredient: "계란지단",
      content: "새해 복 많이 받아!",
    },
    {
      username: "여섯글자별명",
      ingredient: "대파",
      content:
        "수미야 새해에도 행복한 일들만 가득하길 바랄게! 올해는 골골대지말고 건강하게 잘 지내보자ㅎㅎ",
    },
    {
      username: "한",
      ingredient: "떡",
      content:
        "수미야 새해에도 행복한 일들만 가득하길 바랄게! 올해는 골골대지말고 건강하게 잘 지내보자ㅎㅎ",
    },
    {
      username: "두글",
      ingredient: "김",
      content: "수미야 새해에도 행복한 일들만 가득하길 바랄게! ",
    },
    {
      username: "세글자",
      ingredient: "계란지단",
      content: "새해 복 많이 받아!",
    },
    {
      username: "여섯글자별명",
      ingredient: "대파",
      content:
        "수미야 새해에도 행복한 일들만 가득하길 바랄게! 올해는 골골대지말고 건강하게 잘 지내보자ㅎㅎ",
    },
  ];

  return (
    <styled.FlexBox direction="column">
      <TopBar titleName={"나의 떡국"} />
      <styled.FlexBox aCenter={true}>
        <styled.NaviItem
          onClick={() => {
            setCurrPage(0);
          }}
          isCurr={currPage === 0 ? true : false}
        >
          내가 만든 떡국
        </styled.NaviItem>
        <styled.NaviItem
          onClick={() => {
            setCurrPage(1);
          }}
          isCurr={currPage === 1 ? true : false}
        >
          받은 덕담
        </styled.NaviItem>
      </styled.FlexBox>
      {currPage === 0 && <Cooked unlock={unlock} />}
      {currPage === 1 && <Message message={userMessage} />}
    </styled.FlexBox>
  );
};

export default MyInfo;
