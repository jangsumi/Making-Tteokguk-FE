import styled from "styled-components";
import lock from "../../images/lock.svg";

export const NaviItem = styled.div`
  width: 160px;
  padding: 20px 0 10px;
  color: ${(props) => !props.isCurr && "#999999"};
  border-bottom: ${(props) => props.isCurr && "1px solid #000000"};
  text-align: center;
  cursor: pointer;
`;

export const FlexBox = styled.div`
  display: flex;
  max-width:480px;
  margin: 0 auto;
  padding: ${(props) => props.padding};
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.aCenter && "center"};
  gap: ${(props) => props.gap};
  justify-content: center;
`;

// '내가 만든 떡국' 페이지에 사용되는 components
export const GridContainer = styled.div`
  width: 320px;
  margin: 20px 0 0;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, minmax(130px, auto));
  gap: 13px 23px;
`;

export const Tteokguk = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  border: 1px solid #000000;
  background-color: #ffffff;
  background-image: url(${(props) => props.background});
  background-size: 120px 120px;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TteockgukLock = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3) url(${lock}) center center no-repeat;
  background-size: 11px 14px;
`;

export const FontDiv = styled.div`
  font-size: ${(props) => props.fontSize};
`;
export const MessageContainer = styled.div`
  width: 320px;
  margin: 20px auto 0;
`
