import styled from "styled-components";

export const NaviItem = styled.div`
  width: 160px;
  padding: 20px 0px 10px 0px;
  color: ${(props) => !(props.isCurr) && "#999999"};
  border-bottom: ${(props) => props.isCurr && "1px solid #000000"};
  text-align: center;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: center;
`;
