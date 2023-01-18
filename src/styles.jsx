import styled from "styled-components";
import line from './images/line.svg';

export const Line = styled.div`
  height: 40px;
  min-width: 280px;
  background-image: url(${line});
  background-repeat: repeat-x;
  position: relative;
`;

export const Container = styled.div`
  width: auto;
  min-width: 280px;
  position: relative;
  word-break: keep-all;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 100vh;
  @supports (-webkit-appearance:none) and (stroke-color: transparent) {
    min-height: -webkit-fill-available;
  }
`;
export const BottomLine = styled.div`
  height: 40px;
  min-width: 280px;
  width: 100%;
  background-image: url(${line});
  background-repeat: repeat-x;
  position: fixed;
  bottom: 55px;
  z-index: 1000;
`;
export const TopLine = styled.div`
  height: 40px;
  min-width: 280px;
  width: 100%;
  background-image: url(${line});
  background-repeat: repeat-x;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

export const BottomAD = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`
