import styled from "styled-components";
import lock from "../../images/lock.svg";

export const NaviItem = styled.div`
  max-width: 140px;
  min-width: 100px;
  width: calc(40vw - 20px);
  padding: 20px 10px 10px;
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
  width: calc(100vw - 40px);
  margin: 20px 0 0;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, minmax(auto, 130px));
  gap: 13px 23px;
  position: relative;
`;
export const TteokgukWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`
export const Tteokguk = styled.div`
  min-width: 100px;
  width: 100%;
  padding-top: 100%;
  border-radius: 10px;
  border: 1px solid #000000;
  background-color: #ffffff;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

export const TteockgukLock = styled.div`
  width: 100%;
  padding-top: 100%;
  position: absolute;
  top: 0;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3) url(${lock}) center center no-repeat;
  background-size: 11px 14px;
`;

export const FontDiv = styled.div`
  text-align: center;
  font-size: 12px;
  @media only screen and (max-width: 300px) {
    font-size: 11px;
  }
`;
export const MessageContainer = styled.div`
  max-width: 320px;
  width: 100%;
  margin: 20px auto 0;
`
