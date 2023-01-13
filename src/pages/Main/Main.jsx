import React from "react";
import {useRecoilState} from 'recoil';
import * as styled from "./styles";
import {useNavigate} from "react-router-dom";
import {IDState} from "../../atom.jsx";

const MainPage = () => {
    const navigate = useNavigate();
    const [userID, setUserID] = useRecoilState(IDState);

    const onLoginClick = () => {
        setUserID({ref:15, kakao:"kakao_purple", link:"kakao_purple"});
        if (userID.ref) navigate(`/refrigerator/${userID.link}`);
        else {
            navigate('/init');
        }
    }

    return (
        <styled.Container>
            <styled.BackGroundWrapper>
                <styled.MainImg/>
                <styled.TreeImg/>
                <styled.Text>{`2023 새해\n떡국 만들기`}</styled.Text>
            </styled.BackGroundWrapper>

            <styled.LoginContainer onClick={onLoginClick}>
                <styled.LoginImg/>
                <styled.LoginText>카카오 계정으로 계속하기</styled.LoginText>
                <styled.Fake/>
            </styled.LoginContainer>
        </styled.Container>


    );
};

export default MainPage;
