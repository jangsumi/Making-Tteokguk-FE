import styled from "styled-components";
import checked from "../../images/ic_checked.svg";
import unchecked from "../../images/ic_unchecked.svg";
import ExMark from "../../images/ExMark.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 40px;
  width: 320px;
  min-height: calc(100vh - 120px);
`
export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  gap: ${(props) => props.gap}px;
  margin: ${(props) => props.margin};
`;
export const TitleDiv = styled.div`
  font-size: 20px;
  margin: 40px 0 10px;
`
export const TextDiv = styled.div`
  font-size: ${(props) => props.fontSize || 14}px;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export const ExMarkImg = styled.div`
  top: 120px;
  width: 13px;
  height: 13px;
  background: url(${ExMark}) no-repeat;
`;

export const PubPrvBtn = styled.button`
  box-sizing: border-box;
  width: 150px;
  height: 37px;
  background: ${(props) => props.color};
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
  align-items: center; // 중앙정렬
  justify-content: center; // 가운데정렬
  font-size: 14px;
`;


export const CenterLine = styled.div`
  width: 320px;
  height: 0px;
  border: 0.5px solid #999999;
  margin-top: 50px;
`;

export const CheckBtn = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(${(props) => (props.isChecked ? checked : unchecked)});
  cursor: pointer;
`;
export const ButtonWrapper = styled.div`
  margin-top: auto;
  display: flex;
  gap: 10px;
`
export const NextBtn = styled.div`
  box-sizing: border-box;
  width: 210px;
  max-width: 318px;
  height: 50px;
  background: ${(props) => (props.active ? "#E0AEBC" : "#E6D2D8")};
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.active ? "#000000" : "#666666")};
  cursor: ${(props) => (props.active ? "pointer" : "default")};
`;

export const PrevBtn = styled(NextBtn)`
  width: 100px;
`;
