import React from 'react';
import * as styled from "./styles";

const Selected = ({userSelect, onRemoveItem}) => {
    console.log(userSelect);
    const userSelectCnt = userSelect.length;
    const [...empty] = [...Array(4 - userSelectCnt)];

    return (
        <styled.Wrapper>
            <styled.SubText>선택된 재료</styled.SubText>
            <styled.SelectWrapper>
                {userSelect.map((item) => {
                    return <styled.IngredientBox key={`selected-ingredient-${item.idx}`} imageUrl={item.imageUrl}
                                                 onClick={() => onRemoveItem(item)}>
                        <styled.Delete/>
                    </styled.IngredientBox>
                })}
                {empty.map((_, idx) => {
                    return <styled.IngredientBox key={`selected-empty-${idx}`}/>
                })}
            </styled.SelectWrapper>
        </styled.Wrapper>
    );
};

export default Selected;
