import React from 'react';
import Modal from "./Modal.jsx"
import * as styled from './styles.jsx';

const CreateRefModal = ({onConfirmClick, onCancelClick}) => {
    return (
        <Modal>
            <div>
                <styled.Text gap={13}>나만의 냉장고 생성 완료!</styled.Text>
                <styled.Text fontSize={16}>{'친구들에게 공유할 수 있게\n주소를 복사할까요?'}</styled.Text>
            </div>
            <styled.ButtonWrapper>

                <styled.Button onClick={onConfirmClick} width={185}>네, 그럴래요!</styled.Button>
                <styled.Button onClick={onCancelClick} background="#ffffff" width={100}>괜찮아요</styled.Button>
            </styled.ButtonWrapper>
        </Modal>
    );
};

export default CreateRefModal;
