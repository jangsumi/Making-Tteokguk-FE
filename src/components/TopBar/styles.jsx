import styled from "styled-components";
import arrow from "../../images/leftArrow.svg";

export const TopBarContainer = styled.div`
  padding: 40px 20px 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 22px;
`;

export const ButtonBack = styled.div`
  width: 65px;
  height: 20px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const ButtonRecipe = styled.div`
  width: 65px;
  padding: ${(props) => props.padding};
  visibility: ${(props) => !props.visible && "hidden"};
  border: 1px solid #000000;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;
