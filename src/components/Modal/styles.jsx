import styled from "styled-components";
import close from '../../images/close.svg'
import LoginBtnImg from "../../images/LoginBtn.svg";

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top:0;
  left: 0;
  z-index: 100;
`

export const ModalContainer = styled.div`
  max-width: 280px;
  min-width: 200px;
  max-height: calc(100vh - 200px);
  width: calc(100% - 80px);
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 10px;
  word-break: break-all;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${props=>props.close? "48px 20px 30px":"40px 20px 30px"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
export const NoModalContainer = styled(ModalContainer)`
  padding: 48px 20px 30px;
`
export const CloseImg = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 16px;
  height: 16px;
  background: url(${close}) center center no-repeat;
  cursor: pointer;
`
export const Text = styled.div`
  font-size: ${props=>props.fontSize || 20}px;
  background: #ffffff;
  white-space: pre-wrap;
  text-align: center;
  padding-bottom: ${props=>props.gap}px;
  @media only screen and (max-width: 300px) {
    font-size: ${props=>props.fontSize-1 || 19}px
  }
`
export const LongText = styled(Text)`
  max-width: 276px;
  font-size: 14px;
  text-align: left;
  text-shadow: ${props=>props.bold && "-0.1px 0 black, 0 0.1px black, 0.1px 0 black, 0 -0.1px black"};
  white-space: pre-wrap;
`
export const RecipeText = styled.div`
  font-size: 14px;
  background: #FFFFFF;
  @media only screen and (max-width: 320px) {
    font-size: 11px;
  }
`
export const SpanText = styled.span`
  background: #FFFFFF;
  display: inline-block;
`
export const ColorText = styled.span`
  font-size: ${props=>props.fontSize || 14}px;
  color: red;
  background: white;
`
export const resultImage = styled.div`
  width: 120px;
  height: 102px;
  background: url(${props=>props.imageUrl}) center center no-repeat;
  background-size: cover;
`
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  background: #ffffff;
  width: 100%;
`
export const Button = styled.div`
  background: ${props=>props.background || "#E0AEBC"};
  border: 1px solid #000000;
  border-radius: 10px;
  width: ${props=>props.width}px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: ${props=>props.fontSize || 14}px;
  @media only screen and (max-width: 300px) {
    font-size: ${props=>props.fontSize-1 || 13}px
  }
`
export const RecipeWrapper = styled.div`
  background: #FFFFFF;
  overflow: auto;
  width: 100%;
`
export const RecipeBox = styled.div`
  width: 100%;
  height: 50px;
  background: url(${props=>props.imageUrl}) no-repeat;
  background-size: 100% 100%;
`
export const PlusImg = styled.div`
  width: 16px;
  height: 16px;
  background: url(${close}) center center no-repeat;
  cursor: pointer;
  transform: rotate(45deg);
  display: ${props=>!props.visible && "none"};
`
export const LoginLogo = styled.div`
  background: url(${LoginBtnImg});
  background-size: cover;
  margin-right: 10px;
  width: 16px;
  height: 16px;
  border-radius: 10px;
  @media only screen and (max-width: 300px){
    margin-right: 4px;
  }
`
export const TextWrapper = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  gap: 20px;
  width: calc(100% - 20px);
  @media only screen and (max-width:320px) {
    gap: 10px;
  }
`
