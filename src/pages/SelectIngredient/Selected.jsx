import React from 'react';
import * as styled from "./styles";

const Selected = ({userSelect, setUserIngredient, onRemoveItem}) => {
    const userSelectCnt = userSelect.length;
    const [...empty] = [...Array(4 - userSelectCnt)];

    const onClickEvent = (item) => {
        setUserIngredient(userIngredient => {
            return [
                ...userIngredient.slice(0, item.ingredientIndex),
                userIngredient[item.ingredientIndex] + 1,
                ...userIngredient.slice(item.ingredientIndex + 1)
            ]
        })
        onRemoveItem(item);
    }

    return (
        <styled.Wrapper>
            <styled.SubText>선택된 재료</styled.SubText>
            <styled.SelectWrapper>
                {userSelect.map((item) => {
                    return <styled.SelectedBox key={`selected-ingredient-${item.idx}`}
                                               imageUrl={item.imageUrl}
                                               onClick={() => onClickEvent(item)}>
                        <styled.Delete/>
                    </styled.SelectedBox>
                })}
                {empty.map((_, idx) => {
                    return <styled.IngredientBox key={`selected-empty-${idx}`}/>
                })}
            </styled.SelectWrapper>
        </styled.Wrapper>
    );
};

export default Selected;
