import styled from "styled-components";

export const container = styled.div`
  width:360px;
  text-align:center;
  margin:auto;
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