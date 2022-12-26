import styled from "styled-components";
import CheckBtnBlack from '../../images/CheckBtnBlack.svg';
import ExMark from '../../images/ExMark.svg';

export const Container = styled.div`
  margin: 30px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 가운데 정렬
  /* margin: 0 auto; */
`;

export const TextContainer = styled.div`
  display : flex;
  justify-content : center;
  
`;

export const MainText = styled.div`
  width: 320px;
  height: 58px;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #000000;
  position : absolute;
`;


export const MsgPubTxt = styled.div`
  position: absolute;
  width: 320px;
  height: 46px;
  top : 60px;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #000000;
  white-space: pre-wrap;
`;

export const MsgPubInfo = styled.div`
  width: 237px;
  height: 17px;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;
  top : 120px;
  color: #000000;
  position : relative;
`;



export const ExMarkImg = styled.div`
  position: relative;
  top: 120px;
  width : 13px;
  height : 13px;
  display: flex;
  background : url(${ExMark}) no-repeat;
`;
export const GroupContainer = styled.div`
  display : flex;
  position : absolute;
  
`;

export const ExMarkContainer = styled.div`
  display : flex;
  width : 320px;
  position : absolute;
  align-items: center;
  justify-content: left;
`;

export const BtnContainer = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
`;
export const AgreeContainer = styled.div`
  display : flex;
  flex-direction : column;
  margin-top: -40px;
`;

export const PubBtn = styled.button`
  box-sizing: border-box;
  position: relative;
  width: 150px;
  height: 37px;
  top: 170px;
  display : flex;
  background: ${(props) => props.color};
  
  border: 1px solid #000000;
  border-radius: 10px;
  cursor: pointer;
  align-items: center; // 중앙정렬
  justify-content: center; // 가운데정렬
  font-size : 14px;

`;


export const PrvBtn = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 150px;
  height: 37px;
  top : 170px;
  display : flex;
  border: 1px solid #000000;
  border-radius: 10px;
  cursor: pointer;
  background:  ${(props) => props.color};
  align-items: center; // 중앙정렬
  justify-content: center; // 가운데정렬
  font-size : 14px;

`;


export const CenterLine = styled.div`
  position: absolute;
  width: 320px;
  height: 0px;
  top: 250px;
  display : flex;
  border: 0.5px solid #999999;
`;



export const AgreeTxt = styled.div`
  position: relative;
  width: 320px;
  height: 29px;
  top: 290px;
  font-size: 20px;
  line-height: 29px;
  color: #000000;
  display: flex;
`;

export const CheckBox1 = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  width : 18px;
  height : 18px;
  top: 332px;
  display : flex;
  border: 1px solid #000000;
  border-radius: 2px;
`;

export const CheckBtn1Img = styled.div`
  position: absolute;
  top: 336px;
  left : 2px;
  width : 13px;
  height: 9.96px;
  background : url(${CheckBtnBlack}) no-repeat;
  display: flex;
`;

export const AgreeAll = styled.div`
  position: relative;
  top: 330px;
  width : 320px;
  height : 20px;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  color: #000000;
`;

export const CheckBox2 = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  width : 18px;
  height : 18px;
  top: 380px;
  display: flex;
  border: 1px solid #000000;
  border-radius: 2px;
`;

export const CheckBtn2Img = styled.div`
  position: absolute;
  width : 13px;
  height: 9.96px;
  left : 2px;
  top: 384px;
  background : url(${CheckBtnBlack}) no-repeat;
  display: flex;
`;

export const AgeCheck = styled.div`
  position: relative;
  top: 380px;
  width : 320px;
  height : 20px;
  font-size: 14px;
  color: #000000;
  display: flex;
`;

export const CheckBox3 = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  width : 18px;
  height : 18px;
  top: 410px;
  display : flex;
  border: 1px solid #000000;
  border-radius: 2px;
  
`;

export const CheckBtn3Img = styled.div`
  position: absolute;
  width : 13px;
  height: 9.96px;
  left : 2px;
  top: 414px;
  background : url(${CheckBtnBlack}) no-repeat;
  display: flex;
`;

export const Agree = styled.div`
  position: relative;
  top: 410px;
  width : 320px;
  height : 20px;
  font-size: 14px;
  display: flex;
  color: #000000;
`;


export const NextBtn = styled.div`
  box-sizing: border-box;
  position : relative;
  top : 490px;
  width: 210px;
  max-width: 318px;
  /* margin: auto; */
  height: 50px;
  background: #E6D2D8;
  border: 1px solid #000000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;  

`;

export const PrevBtn = styled.div`
  box-sizing: border-box;
  top : 490px;
  width: 100px;
  max-width: 318px;
  // margin: auto;
  height: 50px;
  background: #E6D2D8;
  border: 1px solid #000000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position : relative;


`;


export const Fake = styled.div`
  height : 10px;
  width : 10px;
  
`;