import React from 'react';
import Modal from "./Modal.jsx"
import * as styled from './styles.jsx';


const LoginErrorModal = ({onConfirmClick}) => {
    return (
        <Modal>
            <div>
                <styled.Text gap={13}>카카오 로그인 실패</styled.Text>
                <styled.Text fontSize={14}>{`연결 상태를 확인한 뒤, 재접속 해주세요.`}</styled.Text>
            </div>
            <styled.Button onClick={onConfirmClick} width={150}>이전 페이지로 돌아가기</styled.Button>
        </Modal>
    );
};

export default LoginErrorModal;