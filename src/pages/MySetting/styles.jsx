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
  // margin: 0 auto;
`;
export const BackGroundImg = styled.div`
  
  background: #CFCFCF;
  display:flex;
`;

export const TextContainer = styled.div`
  display : flex;
  justify-content : center;
  align-items : left;

`;

export const MainText = styled.div`
  width: 320px;
  height: 58px;
  font-size: 20px;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content : left;
  color: #000000;
`;


export const MsgPubTxt = styled.div`
  position: absolute;
  width: 320px;
  height: 46px;
  top : 40px;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;
  justify-content : left;
  color: #000000;
`;

export const MsgPubInfo = styled.div`
  width: 237px;
  height: 17px;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;
  top : 98px;
  left : 110px;
  color: #000000;
  position : absolute;
`;

export const ExmarkContainer = styled.div`
  display : flex;
  justify-content : center;
  align-items : left;
`;


export const ExMarkImg = styled.div`
  position: absolute;
  left: 85px;
  right: 327px;
  top: 100px;
  bottom: 612px;
  width : 13px;
  height : 13px;
  display: flex;
  background : url(${ExMark})no-repeat;

`;

export const MsgPubBtnContainer = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
`;

export const PubBtn = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center; // 중앙정렬
  justify-content: center; // 가운데정렬
  font-size : 14px;
  position: absolute;
  width: 150px;
  height: 37px;
  top: 150px;
  left : 80px;
  display : flex;
  background:  #E0AEBC;
  border: 1px solid #000000;
  border-radius: 10px;
  cursor: pointer;

`;


export const PrvBtn = styled.div`
  box-sizing: border-box;
  align-items: center; // 중앙정렬
  justify-content: center; // 가운데정렬
  font-size : 14px;
  position: absolute;
  width: 150px;
  height: 37px;
  left: 250px;
  top: 150px;
  display : flex;
  border: 1px solid #000000;
  border-radius: 10px;
  cursor: pointer;

`;


export const CenterLine = styled.div`
  position: absolute;
  width: 320px;
  height: 0px;
  left: 80px;
  top: 250px;
  display : flex;
  border: 0.5px solid #999999;
`;

export const AgreeContainer = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
`;

export const AgreeTxt = styled.div`
  position: absolute;
  width: 81px;
  height: 29px;
  left: 80px;
  top: 290px;
  font-size: 20px;
  line-height: 29px;
  color: #000000;
`;

export const CheckBox1 = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  width : 18px;
  height : 18px;
  left: 80px;
  top: 340px;
  right: 322px;
  bottom: 406px;
  display : flex;
  border: 1px solid #000000;
  border-radius: 2px;
`;

export const CheckBtn1Img = styled.div`
  position: absolute;
  left: 80px;
  top: 341px;
  bottom: 410.04px;
  background : url(${CheckBtnBlack}) no-repeat;

`;

export const AgreeAll = styled.div`
  position: absolute;
  left: 110px;
  top: 339px;
  bottom: 405px;
  width : 291px;
  heigh : 20px;
  font-size: 14px;
  line-height: 20px;

  color: #000000;
`;

export const CheckBox2 = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  width : 18px;
  height : 18px;
  left: 80px;
  top: 370px;
  right: 322px;
  bottom: 366px;

  border: 1px solid #000000;
  border-radius: 2px;
`;

export const CheckBtn2Img = styled.div`
  position: relative;
  left: 80px;
  top: 375px;
  background : url(${CheckBtnBlack}) no-repeat;
`;

export const AgeCheck = styled.div`
  position: absolute;
  left: 110px;
  right: 21px;
  top: 370px;
  bottom: 365px;
  width : 291px;
  heigh : 20px;
  font-size: 14px;
  line-height: 20px;

  color: #000000;
`;

export const CheckBox3 = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  width : 18px;
  height : 18px;
  left: 80px;
  top: 400px;
  right: 322px;
  bottom: 340px;
  display : flex;
  border: 1px solid #000000;
  border-radius: 2px;
`;

export const CheckBtn3Img = styled.div`
  position: absolute;
  left: 82.0px;
  top: 400px;
  background : url(${CheckBtnBlack}) no-repeat;
`;

export const Agree = styled.div`
  position: absolute;
  left: 110px;
  top: 400px;
  width : 291px;
  heigh : 20px;
  font-size: 14px;
  line-height: 20px;

  color: #000000;
`;

export const BtnContainer = styled.div`
  display : flex;

  justify-content : center;
  align-items : center;
  position : relative;
  

`;

export const NextBtn = styled.div`
  top : 490px;
  left : 190px;
  width: 210px;
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
  position : absolute;

`;

export const PrevBtn = styled.div`
  top : 490px;
  left : 80px;
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
  position : absolute;


`;
