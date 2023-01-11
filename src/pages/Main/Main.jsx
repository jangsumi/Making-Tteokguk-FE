import React from "react";
import * as styled from "./styles";

const MainPage = () => {

    
    const REDIRECT_URI =  "http://3.35.136.13:8080/api/user/kakao/callback";

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    console.log(KAKAO_AUTH_URL);

    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };
    return (
        <styled.Container>
            <styled.BackGroundWrapper>
                <styled.MainImg/>
                <styled.TreeImg/>
                <styled.Text>{`2023 새해\n떡국 만들기`}</styled.Text>
            </styled.BackGroundWrapper>

            <styled.LoginContainer onClick={() => handleLogin()}>
                <styled.LoginImg />
                <styled.LoginText>카카오 계정으로 계속하기</styled.LoginText>
                <styled.Fake/>
            </styled.LoginContainer>
        </styled.Container>


    );
};

export default MainPage;
