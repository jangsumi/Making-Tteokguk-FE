import React, { useState } from "react";
import * as styled from "./styles";



const MainPage = () => {
  return (
      <styled.Container>
        <styled.Wrapper>
          <styled.BackGroundWrapper>
            <styled.BackGroundImg />
          </styled.BackGroundWrapper>
          <styled.LoginContainer>
            <styled.LoginImg/>
            <styled.LoginText>카카오계정으로 계속하기</styled.LoginText>
            <styled.Fake/>
          </styled.LoginContainer>
        </styled.Wrapper>
      </styled.Container>



    
  );
};

export default MainPage;