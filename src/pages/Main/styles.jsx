import LoginBtnImg from "../../images/LoginBtn.svg";
import styled from "styled-components";
import Logo from '../../images/logo.svg'
import HomeImg from '../../images/mainImg.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 30px 0 10px;
  gap: 60px;
  min-height: calc(100vh - 120px);
  max-width: 322px;
  @media only screen and (max-width:480px) {
    gap: 40px;
  }
`;

export const BackGroundWrapper = styled.div`
  position: relative;
  width: 100%;
`
export const MainImg = styled.div`
  margin: auto;
  max-width: 322px;
  width: calc(100% - 40px);
  padding-top: 0;
  height: 322px;
  background: url(${HomeImg}) no-repeat;
  background-size: 100%;
  @media only screen and (max-width:480px) {
    padding-top: calc(100% - 40px);
    height: 0;
  }
`;

export const MainLogo = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: -195px;
  right: -20px;
  background: url(${Logo}) no-repeat;
  background-size: cover;
  @media only screen and (min-height:1100px) {
    width: 170px;
    height: 170px;
    top: -165px;
    right: -20px;
  }
  @media only screen and (max-height:800px) {
    width: 170px;
    height: 170px;
    top: -165px;
    right: -20px;
  }
  @media only screen and (max-width: 480px) {
    width: 170px;
    height: 170px;
    top: -165px;
    right: -20px;
  }
  @media only screen and (max-width: 370px) {
    width: 150px;
    height: 150px;
    top: -145px;
    right: -15px;
  }
  @media only screen and (max-width: 330px) {
    width: 130px;
    height: 130px;
    top: -125px;
    right: -10px;
  }
`
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const LoginContainer = styled.div`
  display: flex;
  align-items: center; // 중앙정렬
  justify-content: space-around; // 가운데정렬
  max-width: 320px;
  width: calc(100% - 40px);
  height: 50px;
  background: #FDDC3F;
  border: 1px solid #000000;
  border-radius: 10px;
  z-index: 1000;
  cursor: pointer;
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
