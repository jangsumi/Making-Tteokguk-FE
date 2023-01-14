import React, {useEffect} from 'react';
import * as styled from './styles.jsx';
import Message from '../../components/Message/Message.jsx';
import {useNavigate, useLocation} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {IDState} from "../../atom.jsx";

const Result = () => {
    const userID = useRecoilValue(IDState);
    const navigate = useNavigate();
    const location = useLocation();
    const { message } = location.state || false;
    const userMessage = message?.filter((item)=>item.type !== 6);

    useEffect(()=> {
        if (!userID.ref) return navigate('/');
    },[]);

    return (
        <styled.ResultContainer>
            <styled.Top>
                <styled.Title>친구들이 보낸 덕담</styled.Title>
                <styled.BackButton onClick={() => navigate(`/refrigerator/${userID.link}`)}>돌아가기</styled.BackButton>
            </styled.Top>
            <Message message={userMessage}/>
        </styled.ResultContainer>
    );
};

export default Result;
