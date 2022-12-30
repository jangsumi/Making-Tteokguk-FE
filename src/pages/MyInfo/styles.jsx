import styled from "styled-components";

export const NaviItem = styled.div`
  width: 160px;
  padding: 20px 0px 10px 0px;
  color: ${(props) => !props.isCurr && "#999999"};
  border-bottom: ${(props) => props.isCurr && "1px solid #000000"};
  text-align: center;
`;

export const FlexBox = styled.div`
  display: flex;
  width: ${(props) => props.width};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: center;
`;

// '내가 만든 떡국' 페이지에 사용되는 components
export const GridContainer = styled.div`
  width: 320px;
  margin: 20px 0px 0px 0px;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(2, minmax(130px, auto));
  gap: 13px 23px;
`;

export const Tteokguk = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  border: 1px solid #000000;
  background-color: #ffffff;
`;
