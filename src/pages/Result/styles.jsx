import styled from "styled-components";

export const MakingContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin:0 auto;
  max-width:480px;
  padding: 40px 20px 40px 20px;
`
export const PotImage = styled.div`
  width: 145px;
  height: 102px;
  display: flex;
  background: url(${(props) => props.imageUrl}) center center;
  background-size: 100% 100%;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.div`
  font-size: 20px;
`
export const BackButton = styled.div`
  width: 80px;
  height: 38px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`
