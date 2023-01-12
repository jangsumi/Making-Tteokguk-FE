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

  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    // axios.get(`http://3.35.136.13:8080/api/user/kakao/callback?code=liHfO2h1fF2zSF8cHQK1uOHlvgZMHriYHxnt2HldqVPeiJXyMxTGGNysq5h8kpOzMp0-0AoqJQ8AAAGFpGFCoQ`)
    axios.get(`${import.meta.env.VITE_APP_API_URI}?code=${code}`).then((res) => {
      console.log(res);
    }).catch((err) => console.log(err));
    // axios({
    //   method: "get",
    //   url: `${import.meta.env.VITE_APP_API_URI}?code=${code}`,
    // })
    //   .then((res) => {
    //     console.log(res); // 토큰 값 확인용 코드
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setTimeout(setShowModal(true), 500);
    //   });
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
