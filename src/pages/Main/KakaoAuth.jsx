import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader.js";
import { getMyFridge } from "../../axios/refrigerator-service";
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
    axios
      .get(`${import.meta.env.VITE_APP_API_URI}?code=${code}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log("debug 1", res.data);
          // 카카오계정 연결에 성공한 경우, 회원 정보 유무 확인
          getMyFridge(res.data.toString()).then((kakaoId) => {
            if (!kakaoId) {
              navigate("/init", { state: { kakaoId: res.data } });
            } else {
              navigate(`/refrigerator/${kakaoId}`);
            }
          });
        }
      })
      .catch(() => setShowModal(true));
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
