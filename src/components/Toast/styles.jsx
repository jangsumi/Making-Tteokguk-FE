import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; };
  100% { opacity: 1; };
`;

const fadeOut = keyframes`
  0% { opacity: 1; };
  100% { opacity: 0; };
`;

export const ToastBox = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
  position: fixed;
  bottom: 72px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 6px;
  padding: 9px 15px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  -webkit-animation: ${(props) =>
    props.show
      ? css`
          ${fadeIn} 0.5s, ${fadeOut} 0.5s 1.5s
        `
      : ""};
  };
  animation: ${(props) =>
    props.show
      ? css`
          ${fadeIn} 0.5s, ${fadeOut} 0.5s 1.5s
        `
      : ""};
  };
  animation-fill-mode: forwards;
`;
