import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import MessageModal from "../../components/Modal/MessageModal";
import TopBar from "../../components/TopBar/TopBar";
import bang from "../../images/bang.svg";
import * as styled from "./styles";

const Delivery2 = () => {
  const [userName, setUserName] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { ingredient } = location.state || false;

  useEffect(() => {
    if (!ingredient) navigate("/delivery");
  }, []);

  const onChangeName = (e) => setUserName(e.target.value.trimStart().slice(0, 6));
  const onBlurName = (e) => setUserName(userName.trimEnd());
  const onChangeMessage = (e) => setTextMessage(e.target.value.trimStart().slice(0, 50));
  const onBlurMessage = (e) => setTextMessage(textMessage.trimEnd());

  const confirmEvent = (type) => {
    setShowModal(false);
    console.log(type + ": confirm");
  };

  const onButtonClick = () => {
    setShowModal(true);
    console.log({
      ingredient: ingredient,
      name: userName,
      message: textMessage,
    });
  };

  return (
    <styled.Container>
      <TopBar titleName={"떡국 재료 선물하기"} />
      <styled.Container>
        <div style={{ marginTop: 30 }}>
          <styled.FontDiv fontSize="20px">별명을 정해주세요.</styled.FontDiv>
          <styled.NameInput
            type="text"
            name="username"
            placeholder="별명을 입력해주세요. (6글자 이내)"
            spellcheck="false"
            value={userName}
            onChange={onChangeName}
            onBlur={onBlurName}
          />
        </div>

        <div>
          <styled.FontDiv fontSize="20px">덕담을 작성해주세요.</styled.FontDiv>
          <styled.TextContainer>
            <styled.MsgTxtArea
              name="textMessage"
              placeholder="친구에게 새해 덕담을 남겨 보세요. (50자 이내)"
              spellcheck="false"
              contenteditable="true"
              rows={4}
              value={textMessage}
              onChange={onChangeMessage}
              onBlur={onBlurMessage}
            />
            <styled.TextCounter>({textMessage.length}/50)</styled.TextCounter>
          </styled.TextContainer>
          <styled.FlexDiv gap="6px" margin="0 0 36px">
            <img src={bang} />
            <styled.FontDiv fontSize="12px">
              상대를 비방하는 내용 작성 시 법적 처벌을 받을 수 있습니다.
            </styled.FontDiv>
          </styled.FlexDiv>
        </div>

        <Button
          onClickEvent={onButtonClick}
          text={"떡국 재료 선물하기"}
          active={userName.trim() != "" && textMessage.trim() != ""}
        />
        {showModal && (
          <MessageModal
            onConfirmClick={() => confirmEvent("message")}
            secret={true}
          />
        )}
      </styled.Container>
    </styled.Container>
  );
};

export default Delivery2;
