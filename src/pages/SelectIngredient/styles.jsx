import styled from "styled-components";
import lock from "../../images/lock.svg";
import ingredientDelete from "../../images/ingredientDelete.svg";

export const Container = styled.div`
  margin: 30px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: calc(100vh - 273px);
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TitleText = styled.div`
  font-size: 20px;
  text-align: center;
`
export const SpanText = styled.span`
  display: inline-block;
  margin: 0 3px;
`
export const SubText = styled(TitleText)`
  font-size: 18px;
  margin-bottom: 10px;
`
export const Ingredients = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 76px);
  grid-gap: 4px 10px;
`
export const IngredientWrapper = styled.div`
  cursor: ${props=>props.active? "pointer":"default"};
  align-items: center;
  gap: 1px;
  margin-bottom: 4px;
`
export const IngredientBox = styled.div`
  position: relative;
  width: 100%;
  height: 76px;
  border: 1px solid #000000;
  border-radius: 10px;
  background: #FFFFFF url(${(props) => props.imageUrl}) center bottom no-repeat;
  background-size: 66px 66px;
`
export const SpecialBox = styled(IngredientBox)`
  width: 248px;
  height: 50px;
  cursor: ${props=>props.active? "pointer":"default"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SelectedBox = styled(IngredientBox)`
  cursor: pointer;
`
export const IngredientLock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -1px;
  left: -1px;
  border: 1px solid #000000;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3) url(${lock}) center center no-repeat;
  background-size: 11px 14px;
`
export const SecretLock = styled(IngredientLock)`
  background: rgba(0, 0, 0, 0.3) url(${lock}) 70px center no-repeat;
  background-size: 11px 14px;
`
export const IngredientText = styled(TitleText)`
  font-size: 14px;
  margin-bottom: 0;
`
export const SpecialText = styled(IngredientText)`
  background: #FFFFFF;
`
export const IngredientNumber = styled.div`
  position: absolute;
  right: 3px;
  top: 3px;
  width: 30px;
  height: 20px;
  background: #FFFFFF;
  border-radius: 8px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SelectWrapper = styled(Ingredients)`
  grid-template-columns: repeat(4, 76px);
  grid-column-gap: 5px;
  @media only screen and (max-width: 330px) {
    grid-template-columns: repeat(2, 76px);
  }
`
export const Delete = styled.div`
  position: absolute;
  right: 6px;
  top: 6px;
  width: 14px;
  height: 14px;
  background: #FFFFFF;
   background: url(${ingredientDelete}) no-repeat;
`
