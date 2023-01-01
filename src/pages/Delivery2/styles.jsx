import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
`;

export const Container = styled.div`
  margin: ${(props) => props.marign};
  padding: ${(props) => props.padding};
`;

export const FontDiv = styled.div`
  font-size: ${(props) => props.fontSize};
`;

export const NameInput = styled.input`
  width: 280px;
  margin: 10px 0px 36px 0px;
  padding: 8px 20px 8px 20px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  font-size: 16px;
  :focus {
    outline: none;
  }
`;

export const MsgTxtArea = styled.textarea`
  width: 280px;
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
  width: 280px;
  position: relative;
  padding: 10px 0px;
`;

export const TextCounter = styled.div`
  position: absolute;
  color: #999999;
  background-color: transparent;
  right: -20px;
  bottom: 20px;
`;
