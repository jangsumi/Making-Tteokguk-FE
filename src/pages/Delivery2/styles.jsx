import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 480px;
  min-width: 240px;
  width: 100%;
  flex-direction: column;
  padding: 40px 0 80px;
  min-height: calc(100vh - 243px);
`;
export const Container = styled(Wrapper)`
  align-items: center;
  max-width: 320px;
  width: calc(100vw - 40px);
  padding: 0 20px 40px;
`
export const FlexDiv = styled.div`
  display: flex;
  gap: 6px;
  margin: 0 0 36px;
`;

export const FontDiv = styled.div`
  font-size: ${(props) => props.fontSize};
`;

export const NameInput = styled.input`
  //min-width: 200px;
  width: calc(100% - 40px);
  //width: 100%;
  max-width: 280px;
  margin: 10px 0 36px;
  padding: 8px 20px 8px 20px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  font-size: 16px;
  :focus {
    outline: none;
  }
  @media only screen and (max-width: 300px) {
    font-size: 14px;
  }
`;

export const MsgTxtArea = styled.textarea`
  max-width: 280px;
  width: calc(100% - 40px);
  height: 90px;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  overflow: hidden;
  white-space: pre-wrap;
  font-size: 16px;
  resize: none;
  :focus {
    outline: none;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 10px 0;
`;

export const TextCounter = styled.div`
  position: absolute;
  color: #999999;
  background-color: transparent;
  right: 20px;
  bottom: 20px;
  visibility: ${props=>props.visible? "visible":"hidden"};
`;
