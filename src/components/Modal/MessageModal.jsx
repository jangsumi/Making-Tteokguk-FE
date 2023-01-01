import React from "react";
import Modal from "./Modal.jsx";
import * as styled from "./styles.jsx";

const MessageModal = ({ onConfirmClick, secret }) => {
  return (
    <Modal>
      <styled.Text fontSize={16}>
        {secret
          ? "덕담과 재료를 냉장고에 잘 넣어뒀어요!\n'비밀의 재료'를 얻었으니\n나의 냉장고에서 확인해 보세요."
          : "덕담과 함께 떡국 재료를\n 친구의 냉장고에 넣어뒀어요!"}
      </styled.Text>
      <styled.Button onClick={onConfirmClick} width={122}>
        확인
      </styled.Button>
    </Modal>
  );
};

export default MessageModal;
