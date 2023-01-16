import React from 'react';
import {useNavigate} from "react-router-dom";
import * as styled from './styles.jsx';

const CannotFind = () => {
    const navigate = useNavigate();

    return (
        <styled.CannotFindContainer>
            <styled.LogoImage/>
            <styled.Text>냉장고를 찾을 수 없어요</styled.Text>
            <styled.Button onClick={()=>navigate('/')}>돌아가기</styled.Button>
        </styled.CannotFindContainer>
    );
};

export default CannotFind;
