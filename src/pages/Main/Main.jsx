import React from "react";
import {useRecoilState} from 'recoil';
import * as styled from "./styles";
import {useNavigate} from "react-router-dom";
import {IDState} from "../../atom.jsx";

const MainPage = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_APP_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_APP_REDIRECT_URI}&response_type=code`;
    console.log(KAKAO_AUTH_URL);

    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };
    const navigate = useNavigate();
    const [userID, setUserID] = useRecoilState(IDState);

    // const onLoginClick = () => {
    //     setUserID({ref:5, kakao:"kakaoWhite", link:"kakaoWhite"});
    //     if (userID.ref) navigate(`/refrigerator/${userID.link}`);
    //     else {
    //         navigate('/init');
    //     }
    // }

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
