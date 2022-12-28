import styled from "styled-components";
import WhiteRef from "../../images/WhiteRef.svg";
import YellowRef from "../../images/YellowRef.svg";
import BlackRef from "../../images/BlackRef.svg";
import PurpleRef from "../../images/PurpleRef.svg";
import CheckBtn from "../../images/CheckBtn.svg"

export const Container = styled.div`
  margin: 30px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const MainText = styled.div`
  position: absolute;
  width: 320px;
  height: 58px;
  font-size: 20px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #000000;
  white-space: pre-wrap;
`;

export const BtnContainer = styled.div`
  display : flex;
  width : 320px;
`;



export const WhiteBtn = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 108px;
  height: 40px;
  top: 65px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 9px;
  text-align : center;
  align-items : center;
`;

export const WhosRefTxt = styled.div`
  position: relative;
  width: 77px;
  height: 24px;
  top: 73px;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  float: left;
  color: #000000;
`;

export const SelectRefColTxtContainer = styled.div`
  display: flex;
`;

export const SelectRefColTxt = styled.div`
  position: relative;
  width: 320px;
  height: 30px;
  top: 80px;
  font-size: 20px;
  display: flex;
  color: #000000;
`;
export const RefColor = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.backgroundColor};
  border: 1px solid #000000;
  border-radius: 20px;
  top : 380px;
  position: relative;
  cursor: pointer;
`
export const RefContainer = styled.div`
  display: flex;
  gap : 10px;
`
export const RefBgTop = styled.div`
  position: absolute;
  width: 320px;
  height: 380px;
  top: 150px;
  background: ${props => props.RefBg};
  border: 1px solid #000000;
  border-radius: 10px;
`;
export const RefBgBtm = styled.div`
  position: absolute;
  width: 320px;
  height: 158px;
  top: 373px;
  background: #BEB7A2;
  border-radius: 0px 0px 10px 10px;
`;
export const RefContentContainer = styled.div`
  display : flex;
  align-items: center;
  justify-content: center;
`;

export const RefImgContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
`;

export const WhiteRefImg = styled.div`
  position: absolute;
  width : 122px;
  height : 220.29px;
  top : 110px;
  background: url(${WhiteRef}) no-repeat;
  background-size:contain;

`;

export const BlackRefImg = styled.div`
  position: absolute;
  width : 122px;
  height : 220.29px;
  top : 110px;
  background: url(${BlackRef}) no-repeat;
  background-size:contain;

`;

export const YellowRefImg = styled.div`
  position: absolute;
  width : 122px;
  height : 220.29px;
  top : 110px;
  background: url(${YellowRef}) no-repeat;
  background-size:contain;

`;

export const PurpleRefImg = styled.div`
  position: absolute;
  width : 122px;
  height : 220.29px;
  top : 110px;
  background: url(${PurpleRef}) no-repeat;
  background-size:contain;

`;

export const CheckBtnImg = styled.div`
  position: absolute;
  top: 470px;
  left : 25%;
  width : 22px;
  height : 18px;
  background : url(${CheckBtn}) no-repeat;
`;

export const NextBtn = styled.div`
  top : 550px;
  width: 320px;
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
