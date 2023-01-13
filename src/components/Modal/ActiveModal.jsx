import React from 'react';
import Modal from "./Modal.jsx"
import * as styled from './styles.jsx';

const ActiveModal = ({onConfirmClick, onCancelClick}) => {
    return (
        <Modal>
            <styled.Text fontSize={16}>
                <styled.SpanText>즐거운 설날이 되어 </styled.SpanText>
                <styled.SpanText>재료를 한꺼번에 넣고 </styled.SpanText>
                <styled.SpanText>떡국을 끓일 수 있게 됐어요! </styled.SpanText>
                <styled.SpanText>덕담도 한꺼번에 </styled.SpanText>
                <styled.SpanText>읽을 수 있다던데요..?!</styled.SpanText>
            </styled.Text>
            <styled.ButtonWrapper>
                <styled.LongButton onClick={onConfirmClick} width={185}>
                    <styled.SpanButton>가진 재료 </styled.SpanButton>
                    <styled.SpanButton>전부 넣고 끓이기</styled.SpanButton>
                </styled.LongButton>
                <styled.Button onClick={onCancelClick} background={"#ffffff"} width={85}>괜찮아요</styled.Button>
            </styled.ButtonWrapper>
        </Modal>
    );
};

export default ActiveModal;
