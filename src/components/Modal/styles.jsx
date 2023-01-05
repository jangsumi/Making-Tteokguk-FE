import styled from "styled-components";
import close from '../../images/close.svg'

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
  width: 280px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 10px;
  word-break: break-all;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${props=>props.close? "48px 20px 48px 20px":"40px 20px 30px 20px"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
export const NoModalContainer = styled(ModalContainer)`
  padding: 48px 20px 48px 20px;
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
`
export const LongText = styled(Text)`
  font-size: 14px;
  text-align: left;
  text-shadow: ${props=>props.bold && "-0.1px 0 black, 0 0.1px black, 0.1px 0 black, 0 -0.1px black"};
  white-space: pre-wrap;
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
`
export const BoxWrapper = styled.div`
  display: flex;
  background: #FFFFFF;
  justify-content: center;
  align-items: center;
  gap: 5px;
`
export const RecipeBox = styled.div`
  border: 1px solid #000000;
  border-radius: 10px;
  width: 48px;
  height: 48px;
  background: url(${props=>props.imageUrl}) center center no-repeat;
  background-size: 42px 42px;
`
export const PlusImg = styled.div`
  width: 16px;
  height: 16px;
  background: url(${close}) center center no-repeat;
  cursor: pointer;
  transform: rotate(45deg);
  display: ${props=>!props.visible && "none"};
`
