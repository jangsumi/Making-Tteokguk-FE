import axios from "axios";
import React, { useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader.js";
import { Container } from "./styles";

const KakaoAuth = () => {
  // 인가 코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://백엔드/user/kakao/callback?code=${code}`,
    }).then((res) => {
      console.log(res); // 토큰 값 확인용 코드
      const ACCESS_TOKEN = res.data.acessToken;
      console.log(ACCESS_TOKEN);
    });
  }, [code]);
  return (
    <Container>
      <SyncLoader color="#DD7592" margin={4} size={12} />
      <>카카오 계정을 연결하고 있어요.</>
    </Container>
  );
};

export default KakaoAuth;
