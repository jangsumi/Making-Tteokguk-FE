import React from 'react';
import Modal from "./Modal.jsx"
import * as styled from './styles.jsx';

const ActiveModal = ({onConfirmClick, onCancelClick}) => {
    return (
        <Modal>
            <styled.Text fontSize={16}>{'즐거운 설날이 되어 재료를 한꺼번에 넣고 떡국을 끓일 수 있게 됐어요!\n덕담도 한꺼번에 읽을 수 있다던데요..?!'}</styled.Text>
            <styled.ButtonWrapper>
                <styled.Button onClick={onConfirmClick} width={185}>가진 재료 전부 넣고 끓이기</styled.Button>
                <styled.Button onClick={onCancelClick} background="#ffffff" width={85}>괜찮아요</styled.Button>
            </styled.ButtonWrapper>
        </Modal>
    );
};

export default ActiveModal;
