import styled from "styled-components";
import lock from "../../images/lock.svg";
import ingredientDelete from "../../images/ingredientDelete.svg";

export const Container = styled.div`
  margin: 30px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
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
export const SubText = styled(TitleText)`
  font-size: 18px;
  margin-bottom: 10px;
`
export const Ingredients = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 76px);
  grid-column-gap: 10px;
`
export const IngredientWrapper = styled.div`
  cursor: pointer;
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
  background: #D9D9D9 url(${(props) => props.imageUrl}) center center;
  background-size: 100% 100%;
`
export const SpecialBox = styled(IngredientBox)`
  width: 248px;
  height: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const IngredientLock = styled.div`
  width: 100%;
  height: 76px;
  border: 1px solid #000000;
  border-radius: 10px;
  background: #D9D9D9 url(${lock}) center center no-repeat;
`
export const IngredientText = styled(TitleText)`
  font-size: 14px;
  margin-bottom: 0;
`
export const SpecialText = styled(IngredientText)`
  background: #D9D9D9;
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
