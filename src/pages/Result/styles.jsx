import styled from "styled-components";

export const ResultContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
`
export const PotImage = styled.div`
  width: 145px;
  height: 102px;
  display: flex;
  background: url(${(props) => props.imageUrl}) center center;
  background-size: 100% 100%;
`;
