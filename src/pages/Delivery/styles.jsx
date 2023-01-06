import styled from "styled-components";
import check from "../../images/check.svg";

export const PageContainer = styled.div`
  display: flex;
  max-width:480px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 120px);
  margin-bottom: 40px;
`;

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
  margin: 20px 0px 50px;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(3, minmax(100px, auto));
  gap: 8px 10px;
`;

export const FontDiv = styled.div`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
`;
