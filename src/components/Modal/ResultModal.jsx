import React from 'react';
import Modal from "./Modal.jsx"
import * as styled from './styles.jsx';

const ResultModal = ({tg, onConfirmClick}) => {
    return (
        <Modal>
            <styled.Text>{`${tg.text}\n맛있게 먹어볼까요?`}</styled.Text>
            <styled.resultImage imageUrl={tg.imageUrl}/>
            <styled.Button onClick={onConfirmClick} width={150} fontSize={16}>덕담 보러가기</styled.Button>
        </Modal>
    );
};

export default ResultModal;
