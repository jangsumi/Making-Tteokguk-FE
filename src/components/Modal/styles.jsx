import styled from "styled-components";
import example from '../../images/example.svg'

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top:0;
  left: 0;
`

export const ModalContainer = styled.div`
  width: 300px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 10px;
  word-break: break-all;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
export const Text = styled.div`
  font-size: ${props=>props.fontSize || 20}px;
  background: #ffffff;
  white-space: pre-wrap;
  text-align: center;
  padding-bottom: ${props=>props.gap}px;
`
export const resultImage = styled.div`
  width: 120px;
  height: 102px;
  background: url(${example}) center center no-repeat;
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
`
