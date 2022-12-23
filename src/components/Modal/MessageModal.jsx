import React, {useState, useEffect} from 'react';
import Modal from "./Modal.jsx"
import * as styled from './styles.jsx';

const MessageModal = ({onConfirmClick, secret}) => {
    const [message, setMessage] = useState('덕담과 함께 떡국 재료를\n친구의 냉장고에 넣어뒀어요!');
    const [clickEvent, setClickEvent] = useState(()=>onConfirmClick);

    const onNextClick = () => {
        setMessage('‘비밀의 재료’를 얻었어요!\n나의 냉장고에서 확인해보세요.');
        setClickEvent(()=>onConfirmClick);
    }

    useEffect(()=>{
        if (secret) setClickEvent(()=>onNextClick);
    },[]);

    return (
        <Modal>
            <styled.Text fontSize={16}>{message}</styled.Text>
            <styled.Button onClick={clickEvent} width={122}>확인</styled.Button>
        </Modal>
    );
};

export default MessageModal;
