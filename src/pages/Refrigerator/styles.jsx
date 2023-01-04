import styled from "styled-components";

export const container = styled.div`
  width:360px;
  text-align:center;
  margin: auto;
  min-height: calc(100vh - 80px);
  position: relative;
  @media only screen and (max-width: 480px) {
    overflow:hidden;
  }
  .open{
    width:399px;
    height:370px;
  }

`;

export const floor = styled.div`
    width:100vw;
    top:502px;
    position: fixed;
    top: 502px;
    left: 0;
    bottom: 40px;
    min-height: 232px;
    background-color:#BEB7A2;
`;

export const menu = styled.img`
    width:17px;
    height:11px;
    padding-top:40px;
    display:block;
    margin-right:20px;
    margin-left:auto;
    margin-bottom:10px;
    cursor: pointer;
`;

export const background = styled.div`
    background: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left: 0;
    z-index: 4;
    @media only screen and (max-width: 480px) {
        left: 0;
    }
`;

export const menuBar = styled.div`
    width:264px;
    height:390px;
    background-color:#ffffff;
    z-index:5;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px 10px 10px 10px;
    .xButton{
        width:16px;
        height:16px;
        margin-bottom:10px;
        margin-top:22px;
        margin-left:auto;
        display:block;
        margin-right:22px;
        background-color:transparent;
        cursor: pointer;
    }
`;

export const menuButton = styled.div`
    font-size:16px;
    height:20px;
    width:100%;
    padding-top:13px;
    padding-bottom:13px;
    background-color:transparent;
    text-align:left;
    display: inline-block;
    cursor: pointer;
    img{
      width:12px;
      height:15px;
      margin-left:34px;
      margin-right:21px;
      background-color:transparent;
    }
`;


export const title = styled.div`
    font-size:26px;
    text-align:center;
    margin-bottom:20px;
`;

export const info = styled.div`
    font-size:16px;
    text-align:center;
    margin-bottom:24px;
    display:block;
`;

export const refri = styled.img`
    top:0px;
    width:200px;
    height:370px;
    z-index:3;
    position:relative;
    margin-bottom:24px;
    padding-left:80px;
    background-color:transparent;
    display:block;
`;

export const ingredientNums = styled.div`
    z-index:4;
    position:absolute;
    background-color:transparent;
    display:grid;
    grid-template-columns: 100px 100px;
    grid-template-rows:83px 108px 85px 20px;
    margin-left:81px;
    top:263px;
    flex-direction:column;
`;
export const ingredientText = styled.div`
  font-size: 10px;
  background-color:transparent;
`
export const ButtonWrapper = styled.div`
  margin-top: auto;
`

export const customButton = styled.button`
  width:320px;
  height:50px;
  line-height:50px;
  font-size:18px;
  background-color: #E0AEBC;
  border: 1px solid #000000;
  border-radius: 10px;
  text-align:center;
  margin-bottom: ${props=>props.last? 40:10}px;
  position:relative;
  z-index:3;
  display:inline-block;
  cursor: pointer;
  :disabled{
    background-color:#CCAFAC;
    color:#666666;
  }
  .lock{
    width:10px;
    height:13px;
    background-color:transparent;
    margin-right:10px;
  }
  
`;

export const bottonBox = styled.div`
  margin:auto;
  width:320px;
  display:inline;
  .make{
    width:210px;
    margin-right:10px;
  }
  .cancle{
    width:100px;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;

`
