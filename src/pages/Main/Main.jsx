import React from "react";
import * as styled from "./styles";

const MainPage = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_APP_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_APP_REDIRECT_URI}&response_type=code`;
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
