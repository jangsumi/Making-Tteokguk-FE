import React from 'react';
import Modal from "./Modal.jsx"
import * as styled from './styles.jsx';

const RecipeLoginModal = ({onConfirmClick, onCancelClick}) => {
    return (
        <Modal>
            <styled.Text fontSize={16}>
                <styled.SpanText>로그인하고 덕담을 남기면</styled.SpanText>
                <styled.SpanText><styled.ColorText fontSize={16}>‘비밀의 재료’</styled.ColorText>를 얻을 수 있어요!<br/></styled.SpanText>
                <styled.SpanText>로그인해도 덕담은 </styled.SpanText>
                <styled.SpanText>익명으로 보내져요.</styled.SpanText>
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

export default RecipeLoginModal;
