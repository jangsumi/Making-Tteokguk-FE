import React from 'react';
import Modal from "./Modal.jsx"
import * as styled from './styles.jsx';

const LoginModal = ({onConfirmClick, onCancelClick}) => {
    return (
        <Modal>
            <styled.Text fontSize={16}>
                <styled.SpanText>해당 서비스를 이용하려면</styled.SpanText>
                <styled.SpanText>로그인이 필요해요.</styled.SpanText>
            </styled.Text>
            <styled.ButtonWrapper>
                <styled.Button onClick={onConfirmClick} background={"#FDDC3F"} width={185}>
                    <styled.LoginLogo/>
                    카카오 로그인하기
                </styled.Button>
                <styled.Button onClick={onCancelClick} background={"#FFFFFF"} width={85}>괜찮아요</styled.Button>
            </styled.ButtonWrapper>
        </Modal>
    );
};

export default LoginModal;
