import React, {useEffect} from "react";
import * as styled from "./styles";
import {useRecoilValue} from "recoil";
import {IDState} from "../../atom.jsx";
import {useNavigate} from "react-router-dom";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_APP_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_APP_REDIRECT_URI}&response_type=code`;

const MainPage = () => {
    const userID = useRecoilValue(IDState);
    const navigate = useNavigate();

    useEffect(() => {
        if (userID.link) navigate(`/refrigerator/${userID.link}`);
    }, []);

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
