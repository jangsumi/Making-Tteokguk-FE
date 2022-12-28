import React, {useState} from "react";
import * as styled from "./styles";
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();
    return (
        <styled.Container>
            <styled.BackGroundWrapper>
                <styled.MainImg/>
                <styled.TreeImg/>
                <styled.Text>{`2023 새해\n떡국 만들기`}</styled.Text>
            </styled.BackGroundWrapper>

            <styled.LoginContainer onClick={()=>navigate('/init')}>
                <styled.LoginImg />
                <styled.LoginText>카카오계정으로 계속하기</styled.LoginText>
                <styled.Fake/>
            </styled.LoginContainer>
        </styled.Container>


    );
};

export default MainPage;
