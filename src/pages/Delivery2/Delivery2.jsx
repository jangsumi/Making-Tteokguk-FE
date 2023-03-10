import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import MessageModal from "../../components/Modal/MessageModal";
import TopBar from "../../components/TopBar/TopBar";
import bang from "../../images/bang.svg";
import * as styled from "./styles";
import { useRecoilValue } from "recoil";
import { IDState } from "../../atom.jsx";
import { deliveryIngredients } from "../../axios/ingredient-service";

const Delivery2 = () => {
  const [userName, setUserName] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { friendRef, ingredient, redirectLink } = location.state || false;
  const userID = useRecoilValue(IDState);

  useEffect(() => {
    if (!friendRef || ingredient===undefined) navigate("/delivery");
  }, []);

  const onChangeName = (e) => setUserName(e.target.value.trimStart().slice(0, 6));
  const onBlurName = () => setUserName(userName.trimEnd());
  const onChangeMessage = (e) => setTextMessage(e.target.value.trimStart().slice(0, 50));
  const onBlurMessage = () => setTextMessage(textMessage.trimEnd());

  const confirmEvent = () => {
    setShowModal(false);
    navigate(`/refrigerator/${redirectLink}`);
  };

  const onButtonClick = () => {
    setShowModal(true);
    const body = {
      content: textMessage,
      title: userName,
      type: ingredient,
    };
    if (userID.ref) {
      // 회원의 경우, 비밀의 재료 획득
      deliveryIngredients(userID.ref, { content: "", title: "", type: 6 });
    } // 친구에게 재료 선물
    deliveryIngredients(friendRef, body);
  };

  return (
    <styled.Wrapper>
      <TopBar titleName={"떡국 재료 선물하기"} />
      <styled.Container>
        <div style={{ marginTop: 30, width: "100%" }}>
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

        <div style={{width: "100%" }}>
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
            <styled.TextCounter visible={textMessage}>({textMessage.length}/50)</styled.TextCounter>
          </styled.TextContainer>

          <styled.FlexDiv gap="6px" margin="0 0 36px">
            <img src={bang} />
            <styled.FontDiv fontSize="12px">
              상대를 비방하는 내용 작성 시 법적 처벌을 받을 수 있습니다.
            </styled.FontDiv>
            
          </styled.FlexDiv>
          <styled.FlexDiv gap="6px" margin="0 0 36px">
            <img src={bang} />
            <styled.FontDiv fontSize="12px">
              덕담에 개인정보 (전화번호, 주소 등) 작성을 지양해 주세요. 
              정보 유출의 위험이 있습니다.
            </styled.FontDiv>
            
          </styled.FlexDiv>
        </div>

        <Button
            onClickEvent={onButtonClick}
            text={"떡국 재료 선물하기"}
            active={userName.trim() !== "" && textMessage.trim() !== ""}
        />
        {showModal && (
            <MessageModal onConfirmClick={confirmEvent} secret={userID.ref} />
        )}
      </styled.Container>
    </styled.Wrapper>
  );
};

export default Delivery2;
