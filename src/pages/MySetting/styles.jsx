import styled from "styled-components";
import Checked from '../../images/Checked.svg';
import UnChecked from '../../images/UnChecked.svg';
import ExMark from '../../images/ExMark.svg';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 가운데 정렬
  margin: 40px auto;
  height: calc(100vh - 160px);
`;

export const MainText = styled.div`
  width: 320px;
  height: 29px;
  font-size: 20px;
  align-items: center;
`;

export const MsgPubTxt = styled.div`
  width: 320px;
  height: 46px;
  margin-top : 11px;
  font-size: 16px;
  align-items: center;
  white-space: pre-wrap;
`;

export const MsgPubInfo = styled.div`
  width: 237px;
  height: 17px;
  font-size: 12px;
  align-items: center;
  top : 120px;
`;

export const ExMarkImg = styled.div`
  top: 120px;
  width : 13px;
  height : 13px;
  background : url(${ExMark}) no-repeat;
`;
export const GroupContainer = styled.div`
  display : flex;
`;

export const ExMarkContainer = styled(GroupContainer)`
  width : 320px;
  align-items: center;
  margin-top : 6px;
  gap : 6px;
`;

export const BtnContainer = styled.div`
  display : flex;
  gap : 10px;
  margin-top: ${props=>props.marginTop || "auto"};
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
  font-size : 14px;
`;

export const CenterLine = styled.div`
  width: 320px;
  height: 0px;
  border: 0.5px solid #999999;
  margin : 50px 0;
`;

export const CheckBtn1Img = styled.div`
  width : 18px;
  height: 18px;
  background : url(${Checked}) no-repeat;
  visibility: ${(props) => props.ischecked1 ? "visible" : "hidden"};
  cursor: pointer;
  margin-top : 11px;
  margin-left : 30px;
  padding-left: 10px;
  

`;
export const UnCheckBtn1Img = styled(CheckBtn1Img)`
  background : url(${UnChecked}) no-repeat;
  position : absolute;
  
`;


export const AgreeAll = styled.div`
  width : 320px;
  height : 20px;
  font-size: 14px;
  margin-top : 10px;
`;


export const CheckBtn2Img = styled(CheckBtn1Img)`
  margin-top: 20px;
  visibility: ${(props) => props.ischecked2 ? "visible" : "hidden"};
`;

export const UnCheckBtn2Img = styled(UnCheckBtn1Img)`
  position : absolute;
  visibility: ${(props) => props.ischecked2 ? "visible" : "hidden"};
  margin-top: 20px;
`;

export const AgeCheck = styled(AgreeAll)`
  margin-top: 20px;
`;

export const CheckBtn3Img = styled(CheckBtn1Img)`
  visibility: ${(props) => props.ischecked3 ? "visible" : "hidden"};
  margin-top: 6px;
`;

export const UnCheckBtn3Img = styled(UnCheckBtn1Img)`
  position : absolute;
  visibility: ${(props) => props.ischecked3 ? "visible" : "hidden"};
  margin-top: 6px;
`;

export const Agree = styled(AgreeAll)`
  margin-top: 6px;
`;


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
