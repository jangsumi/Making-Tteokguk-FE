import styled from "styled-components";
import CheckBtn from "../../images/CheckBtn.svg";

export const Container = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 40px 20px;
  min-height: calc(100vh - 160px);
`;

export const MainText = styled.div`
  width: 100%;
  font-size: 19px;
  align-items: center;
  white-space: pre-wrap;
`;

export const BtnContainer = styled.div`
  display : flex;
  width: 100%;
`;

export const NickNameInput = styled.input`
  background : #FFFFFF;
  border : 0 solid #FFFFFF;
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
  width: 100%;
  height: 30px;
  font-size: 20px;
  margin-top : 40px;
`;
export const RefColor = styled.div`
  width: 100%;
  padding-top: 100%;
  background: ${props => props.backgroundColor};
  border: 1px solid;
  border-radius: 20px;
  cursor: pointer;
  position : relative;
  @media only screen and (max-width: 310px){
    border-radius: 16px;
  }
`
export const RefContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 60px));
  gap : 10px;
  margin: 72px 20px 0;
  background-color: transparent;
`
export const RefBgTop = styled.div`
  width: 100%;
  height: 380px;
  background: #F5F5F5;
  border: 1px solid;
  border-radius: 10px;
  margin : 10px 0 22px;
  position : relative;
`;
export const RefBgBtm = styled.div`
  position: absolute;
  width: 100%;
  height: 158px;
  margin-top : 222px;
  background: #BEB7A2;
  border-radius: 0 0 10px 10px;
`;

export const RefImg = styled.div`
  position: absolute;
  width : 122px;
  height : 220.29px;
  background: url(${props=>props.imageUrl}) no-repeat;
  visibility: ${(props) => props.refVisible? "visible" : "hidden"};
  background-size:contain;
  top : 30px;
  left: 50%;
  transform: translate(-50%, 0);
`;


export const CheckBtnImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding-top: 100%;
  background : url(${CheckBtn}) no-repeat center center;
  background-size: 18.27px 14px;
`;

