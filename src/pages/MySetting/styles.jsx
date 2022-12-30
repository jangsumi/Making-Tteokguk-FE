import styled from "styled-components";
import Checked from '../../images/Checked.svg';
import UnChecked from '../../images/UnChecked.svg';
import ExMark from '../../images/ExMark.svg';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 가운데 정렬
`;

export const MainText = styled.div`
  width: 320px;
  height: 29px;
  font-size: 20px;
  align-items: center;
  color: #000000;
  margin-top : 30px;
`;


export const MsgPubTxt = styled.div`
  width: 320px;
  height: 46px;
  margin-top : 11px;
  font-size: 16px;
  align-items: center;
  color: #000000;
  white-space: pre-wrap;
`;

export const MsgPubInfo = styled.div`
  width: 237px;
  height: 17px;
  font-size: 12px;
  line-height: 17px;
  align-items: center;
  top : 120px;
  color: #000000;
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
`;
export const AgreeContainer = styled.div`
  display : flex;
  flex-direction : column;
  margin-top: -40px;
`;

export const PubBtn = styled.button`
  box-sizing: border-box;
  width: 150px;
  height: 37px;
  background: ${(props) => props.color};
  border: 1px solid #000000;
  border-radius: 10px;
  cursor: pointer;
  align-items: center; // 중앙정렬
  justify-content: center; // 가운데정렬
  font-size : 14px;
  margin-top : 20px;
`;

export const PrvBtn = styled(PubBtn)`
  background:  ${(props) => props.color};
`;

export const CenterLine = styled.div`
  width: 320px;
  height: 0px;
  border: 0.5px solid #999999;
  margin-top : 50px;
`;

export const AgreeTxt = styled.div`
  width: 320px;
  height: 29px;
  font-size: 20px;
  color: #000000;
  margin-top : 40px;
`;


export const CheckBtn1Img = styled.div`
  width : 18px;
  height: 18px;
  background : url(${Checked}) no-repeat;
  cursor: pointer;
  margin-top : 11px;
  margin-left : 30px;
  padding-left: 10px;

`;
export const UnCheckBtn1Img = styled.input`
  width : 18px;
  height: 18px;
  background : url(${UnChecked}) no-repeat;
  border : 0px;
  cursor: pointer;
  

`;


export const AgreeAll = styled.div`
  width : 320px;
  height : 20px;
  font-size: 14px;
  color: #000000;
  margin-top : 10px;
`;


export const CheckBtn2Img = styled(CheckBtn1Img)`
  margin-top: 20px;
`;

export const AgeCheck = styled(AgreeAll)`
  margin-top: 20px;
`;

export const CheckBtn3Img = styled(CheckBtn1Img)`
  margin-top: 6px;
`;

export const Agree = styled(AgreeAll)`
  margin-top: 6px;
`;


export const NextBtn = styled.div`
  box-sizing: border-box;
  width: 210px;
  margin-top : 209px;
  max-width: 318px;
  height: 50px;
  background: #E6D2D8;
  border: 1px solid #000000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;  

`;

export const PrevBtn = styled(NextBtn)`
  width: 100px;
  background: #E6D2D8;
`;