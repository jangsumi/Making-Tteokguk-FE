import styled from "styled-components";

export const MakingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
  min-height: 100vh;
  @supports (-webkit-appearance:none) and (stroke-color: transparent) {
    min-height: -webkit-fill-available;
  }
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  max-width:440px;
  margin:0 auto;
  padding: 80px 20px 120px;
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
  width: 80%;
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
