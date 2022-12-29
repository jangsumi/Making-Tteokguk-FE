import React from "react";
import { useState } from "react";
import Button from "../../components/Button/Button";
import TopBar from "../../components/TopBar/TopBar";
import bang from "../../images/bang.svg";
import * as styled from "./styles";

const Delivery2 = () => {
  const [userName, setUserName] = useState("");
  const [textMessage, setTextMessage] = useState("");

  const onChangeName = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  };

  const onChangeMessage = (e) => {
    setTextMessage(e.target.value);
    console.log(textMessage);
  };

  return (
    <>
      <TopBar titleName={"떡국 재료 선물하기"} />
      <styled.FlexDiv flexDirection="column" alignItems="center">
        <styled.Container padding="30px 20px">
          <styled.FontDiv fontSize="20px">별명을 정해주세요.</styled.FontDiv>
          <styled.NameInput
            type="text"
            name="username"
            placeholder="별명을 입력해주세요. (6글자 이내)"
            spellcheck="false"
            maxLength={6}
            value={userName}
            onChange={onChangeName}
          />
          <styled.FontDiv fontSize="20px">덕담을 작성해주세요.</styled.FontDiv>
          <styled.TextContainer>
            <styled.MsgTxtArea
              name="textMessage"
              placeholder="친구에게 새해 덕담을 남겨 보세요. (50자 이내)"
              spellcheck="false"
              contenteditable="true"
              maxLength={50}
              value={textMessage}
              onChange={onChangeMessage}
            />
            <styled.TextCounter>({textMessage.length}/50)</styled.TextCounter>
          </styled.TextContainer>
          <styled.FlexDiv gap="6px" margin="0px 0px 200px 0px">
            <img src={bang} />
            <styled.FontDiv fontSize="12px">
              상대를 비방하는 내용 작성 시 법적 처벌을 받을 수 있습니다.
            </styled.FontDiv>
          </styled.FlexDiv>
          <Button text={"떡국 재료 선물하기"} active={userName.trim() != "" && textMessage.trim() != ""}/>
        </styled.Container>
      </styled.FlexDiv>
    </>
  );
};

export default Delivery2;
