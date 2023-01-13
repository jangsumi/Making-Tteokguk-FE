import styled from "styled-components";
import arrow from "../../images/leftArrow.svg";

export const TopBarContainer = styled.div`
  padding: 40px 20px 0 20px;
  display: flex;
  max-width: 480px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 22px;
  text-align: center; 
  width: 100%;
`;

export const ButtonBack = styled.div`
  width: ${props=>props.visible? 85:40}px;
  height: 20px;
  background: url(${arrow}) no-repeat;
  background-size: 20px 20px;
  cursor: pointer;
`;

export const ButtonRecipe = styled.div`
  width: ${props=>props.visible? 60:10}px;
  padding: ${(props) => props.padding};
  visibility: ${(props) => !props.visible && "hidden"};
  border: 1px solid #000000;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  background: #FFFFFF;
`;
