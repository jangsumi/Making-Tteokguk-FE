import React, {useState, useEffect} from 'react';
import Modal from "./Modal.jsx"
import * as styled from './styles.jsx';

const SecretIngredientModal = ({onConfirmClick}) => {
    return (
        <Modal>
            <div>
                <styled.Text gap={13}>비밀의 재료?</styled.Text>
                <styled.Text fontSize={14}>{`로그인한 상태로 친구에게 덕담을 작성하면\n비밀의 재료를 하나씩 얻을 수 있어요.\n로그인한 채로 덕담을 보내도 익명은 유지돼요.`}</styled.Text>
            </div>
            <styled.Button onClick={onConfirmClick} width={122}>확인</styled.Button>
        </Modal>
    );
};

export default SecretIngredientModal;
