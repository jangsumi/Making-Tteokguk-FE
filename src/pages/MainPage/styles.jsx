import LoginBtnImg from "../../images/LoginBtn.svg";
import styled from "styled-components";
import MainPic from "../../images/MainPic.svg";


export const Container = styled.div`
  margin: 30px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 가운데 정렬
  // margin: 0 auto;
`;
export const BackGroundWrapper = styled.div`
  position: relative;
  width: 380px;
  height: 484px;
`
export const BackGroundImg = styled.div`
  position: absolute;
  width: 360px;
  height: 360px;
  top: 100px;
  left: 0px;
  background: url(${MainPic}) no-repeat;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center; // 중앙정렬
  justify-content: space-around; // 가운데정렬
  width: 320px;
  height: 50px;
  background: #FDDC3F;
  border: 1px solid #000000;
  border-radius: 10px;
  z-index: 1000;
`
export const LoginImg = styled.div`
  background: url(${LoginBtnImg});
  width: 30px;
  height: 30px;
  border-radius: 10px;
`
export const LoginText = styled.div`
  font-size: 15px;
  display : block;
  color: #000000;
  background : #FDDC3F;
`
export const Fake = styled.div`
  width: 30px;
`
