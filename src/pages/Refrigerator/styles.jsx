import styled from "styled-components";

export const container = styled.div`
  max-width: 360px;
  text-align: center;
  margin: auto;
  min-height: calc(100vh - 120px);
  position: relative;
  overflow: visible;
  background: transparent;
`;

export const Block = styled.div`
  height: 40px;
`

export const floor = styled.div`
  width: 100%;
  position: absolute;
  top: 475px;
  min-height: 298px;
  height:calc(100vh - 515px);
  background-color: #BEB7A2;
`;

export const menu = styled.img`
  width: 17px;
  height: 11px;
  display: flex;
  margin: 40px 20px 10px auto;
  cursor: pointer;
`;

export const background = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  @media only screen and (max-width: 480px) {
    left: 0;
  }
`;

export const menuBar = styled.div`
  width: 264px;
  height: 390px;
  background-color: #ffffff;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px 10px 10px 10px;

  .xButton {
    width: 16px;
    height: 16px;
    margin-bottom: 10px;
    margin-top: 22px;
    margin-left: auto;
    display: block;
    margin-right: 22px;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const menuButton = styled.div`
  font-size: 16px;
  height: 20px;
  width: 100%;
  padding-top: 13px;
  padding-bottom: 13px;
  background-color: transparent;
  text-align: left;
  display: inline-block;
  cursor: pointer;

  img {
    width: 12px;
    height: 15px;
    margin-left: 34px;
    margin-right: 21px;
    background-color: transparent;
  }
`;


export const title = styled.div`
  font-size: 26px;
  text-align: center;
  margin-bottom: 20px;
`;

export const info = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 24px;
  display: block;
`;

export const RefriContainer = styled.div`
  height: 394px;
  position: relative;
  background: transparent;
  .open {
    width: 399px;
    position: absolute;
    left: 80px;
    @media only screen and (max-width: 360px) {
      left: calc(50vw - 100px);
    }
  }
`

export const refri = styled.img`
  width: 200px;
  height: 370px;
  z-index: 3;
  background-color: transparent;
`;

export const ingredientNums = styled.div`
  z-index: 4;
  position: absolute;
  background-color: transparent;
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows:83px 108px 85px 20px;
  //margin-left: 46px;
  top: 73px;
  flex-direction: column;
`;
export const ingredientText = styled.div`
  font-size: 10px;
  background-color: transparent;
`
export const ButtonWrapper = styled.div`
  margin-top: auto;
  background: transparent;
`

export const customButton = styled.button`
  max-width: 320px;
  width: calc(100% - 40px);
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  background-color: #E0AEBC;
  border: 1px solid #000000;
  border-radius: 10px;
  text-align: center;
  margin-bottom: ${props => props.last ? 40 : 10}px;
  position: relative;
  z-index: 3;
  display: inline-block;
  cursor: pointer;

  :disabled {
    background-color: #CCAFAC;
    color: #666666;
  }

  .lock {
    width: 10px;
    height: 13px;
    background-color: transparent;
    margin-right: 10px;
  }

`;

export const bottonBox = styled.div`
  margin: auto;
  max-width: 320px;
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  background: transparent;
  .make {
    max-width: 210px;
    width: 70%;
    margin-right: 10px;
  }
  .cancel {
    max-width: 100px;
    width: 30%;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;

`
