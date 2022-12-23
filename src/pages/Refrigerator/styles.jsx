import styled from "styled-components";

export const container = styled.div`
  width:360px;
  text-align:center;
  margin:auto;
  @media only screen and (max-width: 480px) {
    overflow:hidden;
  }
}
  .open{
    width:399px;
    height:370px;
  }

`;



export const floor = styled.div`
    width:100vw;
    top:502px;
    position: absolute;
    height: calc(100vh - 582px);
    background-color:#BEB7A2;
    right: calc(240px - 50vw);
    z-index:1;
    @media only screen and (max-width: 480px) {
        left: 0;
    }
`;

export const menu = styled.img`
    width:17px;
    height:11px;
    padding-top:40px;
    display:block;
    margin-right:20px;
    margin-left:auto;
    margin-bottom:29px;
    cursor: pointer;
`;

export const background = styled.div`
    background: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
    position:absolute;
    right: calc(240px - 50vw);
    z-index:4;
    top:-40px;
    @media only screen and (max-width: 480px) {
        left: 0;
    }
`;

export const menuBar = styled.div`
    width:264px;
    height:390px;
    background-color:#ffffff;
    z-index:5;
    position:absolute;
    top:165px;
    @media only screen and (max-width: 480px) {
        left: calc(50vw - 132px)
    }
    left:108px;
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


export const Title = styled.div`
    font-size:26px;
    text-align:center;
    margin-bottom:58px;
`;

export const refri = styled.img`
    top:0px;
    width:200px;
    height:370px;
    z-index:3;
    position:relative;
    margin-bottom:24px;
    padding-left:80px;
    padding-right:80px;
    background-color:transparent;
    display:block;
`;

export const customButton = styled.button`
  width:320px;
  height:50px;
  line-height:50px;
  font-size:18px;
  background-color: #E0AEBC;
  border: 1px solid #000000;
  border-radius: 10px;
  text-align:center;
  margin-bottom:10px;
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