import React from 'react';
import * as styled from "./styles";
import example2 from "../../images/example.svg";

const Display = ({userIngredient, onAddItem}) => {
    const ingredient = [
        {name: "떡", imageUrl: example2},
        {name: "김", imageUrl: example2},
        {name: "계란지단", imageUrl: example2},
        {name: "대파", imageUrl: example2},
        {name: "약과", imageUrl: example2},
        {name: "산적", imageUrl: example2},
    ]

    return (
        <styled.Wrapper>
            <styled.SubText>냉장고 안에 있는 재료</styled.SubText>
            <styled.Ingredients>
                {ingredient.map(({name, imageUrl}, index) =>
                    <styled.IngredientWrapper key={`ingredient-${index}`} onClick={() => onAddItem({name, imageUrl})}>
                        {userIngredient[index] ?
                            <styled.IngredientBox imageUrl={imageUrl}>
                                <styled.IngredientNumber>x {userIngredient[index]}</styled.IngredientNumber>
                            </styled.IngredientBox>
                            :
                            <styled.IngredientLock/>
                        }
                        <styled.IngredientText>{name}</styled.IngredientText>
                    </styled.IngredientWrapper>
                )}
                <styled.SpecialBox>
                    <styled.SpecialText>비밀의 재료</styled.SpecialText>
                    <styled.IngredientNumber>x {userIngredient[6] || 0}</styled.IngredientNumber>
                </styled.SpecialBox>
            </styled.Ingredients>
        </styled.Wrapper>
    );
};

export default Display;
