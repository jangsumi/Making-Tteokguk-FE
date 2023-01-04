import styled from "styled-components";
import WhiteRef from "../../images/WhiteRef.svg";
import YellowRef from "../../images/YellowRef.svg";
import BlackRef from "../../images/BlackRef.svg";
import PurpleRef from "../../images/PurpleRef.svg";
import CheckBtn from "../../images/CheckBtn.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
  min-height: calc(100vh - 160px);
`;

export const MainText = styled.div`
  width: 320px;
  height: 58px;
  font-size: 20px;
  align-items: center;
  white-space: pre-wrap;
`;

export const BtnContainer = styled.div`
  display : flex;
  width : 320px;
`;

export const NickNameInput = styled.input`
  background : #FFFFFF;
  border : 0px solid #FFFFFF;
  width : 88px;
  height : 24px;
  font-size : 16px;
  justify-content: center;
  outline : none;
  padding-left: 10px;
`;

export const WhiteBtn = styled.div`
  box-sizing: border-box;
  width: 108px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid;
  border-radius: 9px;
  text-align : center;
  margin-right : 10px;
  margin-top : 10px;
  display: flex;
  align-items: center;
`;

export const WhosRefTxt = styled.div`
  font-size: 16px;
  margin-top : 18px;
`;

export const SelectRefColTxt = styled.div`
  width: 320px;
  height: 30px;
  font-size: 20px;
  margin-top : 40px;
`;
export const RefColor = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.backgroundColor};
  border: 1px solid;
  border-radius: 20px;
  cursor: pointer;
`
export const RefContainer = styled.div`
  display: flex;
  gap : 10px;
  position: absolute;
  margin-top : 72px;
  margin-left : 20px;
  background-color: transparent;
`
export const RefBgTop = styled.div`
  width: 320px;
  height: 380px;
  background: ${props => props.RefBg};
  border: 1px solid;
  border-radius: 10px;
  margin : 10px 0 22px;
  position : relative;
`;
export const RefBgBtm = styled.div`
  position: absolute;
  width: 320px;
  height: 158px;
  margin-top : 222px;
  background: #BEB7A2;
  border-radius: 0px 0px 10px 10px;
`;

export const WhiteRefImg = styled.div`
  position: absolute;
  width : 122px;
  height : 220.29px;
  background: url(${WhiteRef}) no-repeat;
  visibility: ${(props) => props.refVisible === 1 ? "visible" : "hidden"};
  background-size:contain;
  top : 30px;
  left : 100px;

`;

export const BlackRefImg = styled(WhiteRefImg)`
  background: url(${BlackRef}) no-repeat;
  visibility: ${(props) => props.refVisible === 2 ? "visible" : "hidden"};
  background-size:contain;
`;

export const YellowRefImg = styled(WhiteRefImg)`
  background: url(${YellowRef}) no-repeat;
  visibility: ${(props) => props.refVisible === 3 ? "visible" : "hidden"};
  background-size:contain;
`;

export const PurpleRefImg = styled(WhiteRefImg)`
  background: url(${PurpleRef}) no-repeat;
  visibility: ${(props) => props.refVisible === 4 ? "visible" : "hidden"};
  background-size:contain;
`;

export const CheckBtnImg = styled.div`
  position: absolute;
  width : 18.27px;
  height : 14px;
  margin-top: 23px;
  margin-left : 21px;
  background : url(${CheckBtn}) no-repeat;
  background-size:contain;
`;

