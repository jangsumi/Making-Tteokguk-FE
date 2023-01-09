import LoginBtnImg from "../../images/LoginBtn.svg";
import styled from "styled-components";
import Home from '../../images/Home.svg';
import HomeTree from '../../images/homeTree.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 80px;
  height: calc(100vh - 80px);
  max-width: 480px;
`;

export const BackGroundWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 322px;
`
export const MainImg = styled.div`
  margin: auto;
  width: 322px;
  height: 322px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background: url(${Home}) no-repeat;
`;
export const TreeImg = styled.div`
  position: absolute;
  width: 250px;
  height: 137px;
  top: -29px;
  left: 0;
  background: url(${HomeTree}) no-repeat;
`;
export const Text = styled.div`
  font-size: 28px;
  text-align: center;
  white-space: pre-wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 322px;
`

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
