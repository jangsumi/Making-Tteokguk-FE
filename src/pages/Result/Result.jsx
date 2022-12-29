import React from 'react';
import * as styled from './styles.jsx';
import Message from '../../components/Message/Message.jsx';
import {useNavigate} from "react-router-dom";

const Result = () => {
    const navigate = useNavigate()
    const userMessage = [
        {username: "한", ingredient: "떡", content: "수미야 새해에도 행복한 일들만 가득하길 바랄게! 올해는 골골대지말고 건강하게 잘 지내보자ㅎㅎ"},
        {username: "두글", ingredient: "김", content: "수미야 새해에도 행복한 일들만 가득하길 바랄게! "},
        {username: "세글자", ingredient: "계란지단", content: "새해 복 많이 받아!"},
        {username: "여섯글자별명", ingredient: "대파", content: "수미야 새해에도 행복한 일들만 가득하길 바랄게! 올해는 골골대지말고 건강하게 잘 지내보자ㅎㅎ"},
    ]

    return (
        <styled.ResultContainer>
            <styled.Top>
                <styled.Title>친구들이 보낸 덕담</styled.Title>
                <styled.BackButton onClick={() => navigate('/refrigerator')}>돌아가기</styled.BackButton>
            </styled.Top>
            <Message message={userMessage}/>
        </styled.ResultContainer>
    );
};

export default Result;
