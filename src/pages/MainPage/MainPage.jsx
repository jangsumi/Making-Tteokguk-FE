import React, {useState} from "react";
import * as styled from "./styles";


const MainPage = () => {
    return (
        <styled.Container>
            <styled.BackGroundWrapper>
                <styled.MainImg/>
                <styled.TreeImg/>
                <styled.Text>{`2023 새해\n떡국 만들기`}</styled.Text>
            </styled.BackGroundWrapper>

            <styled.LoginContainer>
                <styled.LoginImg/>
                <styled.LoginText>카카오계정으로 계속하기</styled.LoginText>
                <styled.Fake/>
            </styled.LoginContainer>
        </styled.Container>


    );
};

export default MainPage;
