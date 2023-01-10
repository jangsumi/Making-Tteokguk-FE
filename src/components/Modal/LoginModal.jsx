import React from 'react';
import Modal from "./Modal.jsx"
import * as styled from './styles.jsx';

const LoginModal = ({onConfirmClick, onCancelClick}) => {
    return (
        <Modal>
            <styled.Text fontSize={16}>{'로그인하고 덕담을 남기면\n‘비밀의 재료’를 얻을 수 있어요!'}</styled.Text>
            <styled.ButtonWrapper>
                <styled.Button onClick={onConfirmClick} background="#FDDC3F" width={185}>
                    <styled.LoginLogo/>
                    카카오 로그인하기
                </styled.Button>
                <styled.Button onClick={onCancelClick} background="#ffffff" width={85}>괜찮아요</styled.Button>
            </styled.ButtonWrapper>
        </Modal>
    );
};

export default LoginModal;
