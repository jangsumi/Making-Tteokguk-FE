import React, { useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import * as styled from "./styles";

const Cooked = () => {
  return (
    <styled.FlexBox>
      <styled.GridContainer>
        <styled.Tteokguk />
        <styled.Tteokguk />
        <styled.Tteokguk />
        <styled.Tteokguk />
        <styled.Tteokguk />
      </styled.GridContainer>
    </styled.FlexBox>
  );
};

const MyInfo = () => {
  const [currPage, setCurrPage] = useState(0);

  return (
    <styled.FlexBox direction="column">
      <TopBar titleName={"나의 떡국"} />
      <styled.FlexBox>
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
      {currPage === 0 && <Cooked />}
    </styled.FlexBox>
  );
};

export default MyInfo;
