import React from "react";
import Modal from "./Modal.jsx";
import * as styled from "./styles.jsx";

const MessageModal = ({ onConfirmClick, secret }) => {
  return (
    <Modal>
      <styled.Text fontSize={16}>
        {secret?
            <>
                <styled.SpanText>덕담과 재료를 </styled.SpanText>
                <styled.SpanText>냉장고에 잘 넣어뒀어요! </styled.SpanText>
                <styled.SpanText>'비밀의 재료'를 얻었으니 </styled.SpanText>
                <styled.SpanText>나의 냉장고에서 확인해 보세요.</styled.SpanText>
            </>
          :
            <>
                <styled.SpanText>덕담과 함께 떡국 재료를 </styled.SpanText>
                <styled.SpanText>친구의 냉장고에 넣어뒀어요!</styled.SpanText>
            </>
        }
      </styled.Text>
      <styled.Button onClick={onConfirmClick} width={122}>
        확인
      </styled.Button>
    </Modal>
  );
};

export default MessageModal;
