import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  gap: 10px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const IngredientBox = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #000000;
  border-radius: 10px;
  background: #FFFFFF url(${props=>props.imageUrl}) center center no-repeat;
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(100% - 50px);
`
export const Text = styled.div`
  font-size: 16px;
`
export const MessageBox = styled.div`
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 10px;
  font-size: 16px;
  padding: 20px;
  word-break: break-all;
  //min-width: 220px;
  width: calc(100% - 40px);
`