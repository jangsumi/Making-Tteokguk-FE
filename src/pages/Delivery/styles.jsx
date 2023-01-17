import styled from "styled-components";
import check from "../../images/check.svg";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  padding: 40px 0;
  min-height: calc(100vh - 203px);
`;
export const PageContainer = styled(Wrapper)`
  align-items: center;
  width: calc(100vw - 40px);
  min-width: 240px;
  padding: 0 20px 40px;
`
export const CheckMark = styled.div`
  width: 30px;
  height: 30px;
  background-color: transparent;
  background-image: url(${check});
  background-repeat: no-repeat;
`;

export const Ingredient = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 10px;
  background-image: url(${(props) => props.imgBg});
  background-repeat: no-repeat;
  background-position: center;
`;

export const GridContainer = styled.div`
  width: 320px;
  margin: 20px 0 50px;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(3, minmax(100px, auto));
  gap: 8px 10px;
  @media only screen and (max-width: 340px) {
    grid-template-columns: repeat(2, minmax(100px, auto));
  }
`;

export const FontDiv = styled.div`
  text-align: center;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
`;

export const Enter = styled.span`
  @media only screen and (max-width: 340px) {
    display: block;
  }
`
