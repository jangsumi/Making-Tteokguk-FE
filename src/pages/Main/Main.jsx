import React from "react";
import * as styled from "./styles";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_APP_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_APP_REDIRECT_URI}&response_type=code`;

const MainPage = () => {
    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    return (
        <styled.Container>
            <styled.BackGroundWrapper>
                <styled.MainImg/>
            </styled.BackGroundWrapper>
            <styled.Wrapper>
                <styled.MainLogo/>
                <styled.LoginContainer onClick={() => handleLogin()}>
                    <styled.LoginImg/>
                    <styled.LoginText>카카오 계정으로 계속하기</styled.LoginText>
                    <styled.Fake/>
                </styled.LoginContainer>
            </styled.Wrapper>
        </styled.Container>
    );
};

export default MainPage;
