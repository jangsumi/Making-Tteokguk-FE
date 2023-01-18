import styled from "styled-components";
import logo from '../../images/logo.svg';

export const CannotFindContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @supports (-webkit-appearance:none) and (stroke-color: transparent) {
    min-height: -webkit-fill-available;
  }
`
export const LogoImage = styled.div`
  width: 200px;
  height: 200px;
  background: url(${logo}) no-repeat;
`
export const Text = styled.div`
  margin: 10px 0 23px;
  font-size: 20px;
  cursor: default;
`
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 38px;
  background: #E0AEBC;
  border: 1px solid #000000;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
`
