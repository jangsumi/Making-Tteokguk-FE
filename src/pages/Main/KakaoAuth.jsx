import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader.js";
import LoginErrorModal from "../../components/Modal/LoginErrorModal";
import { Container } from "./styles";

const KakaoAuth = () => {
  const [showModal, setShowModal] = useState(false);

  const confirmEvent = () => {
    setShowModal(false);
    navigate("/");
  };

  let code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5173//user/kakao/callback?code=${code}`,
    })
      .then((res) => {
        console.log(res); // 토큰 값 확인용 코드
        const ACCESS_TOKEN = res.data.acessToken;
        console.log(ACCESS_TOKEN);
        if (res.status === 203) {
          // 가입되지 않은 사용자의 경우
          navigate("/init");
        } else if (res.status === 200) {
          navigate("/refrigerator");
        }
      })
      .catch((err) => {
        console.log(err);
        setTimeout(setShowModal(true), 500);
      });
  }, []);
  return (
    <Container>
      <SyncLoader color="#DD7592" margin={4} size={12} />
      <>카카오 계정을 연결하고 있어요.</>
      {showModal && <LoginErrorModal onConfirmClick={() => confirmEvent()} />}
    </Container>
  );
};

export default KakaoAuth;
