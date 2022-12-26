import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: calc(100% - 2px);
  max-width: 318px;
  margin: auto auto 0;
  height: 50px;
  background: ${props=>props.active? "#E0AEBC":"#E6D2D8"};
  border: 1px solid #000000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props=>props.actove? "pointer":"default"};
`
