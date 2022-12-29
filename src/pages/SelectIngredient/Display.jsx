import React from 'react';
import * as styled from "./styles";
import tteok from "../../images/tteok.svg";
import gim from "../../images/gim.svg";
import gyeranjidan from "../../images/gyeranjidan.svg";
import daepa from "../../images/daepa.svg";
import yakgwa from "../../images/yakgwa.svg";
import sanjeok from "../../images/sanjeok.svg";
import secretIngredient from "../../images/secretIngredient.svg";

const Display = ({userIngredient, userSelect, setUserIngredient, onAddItem}) => {
    const ingredient = [
        {name: "떡", imageUrl: tteok},
        {name: "김", imageUrl: gim},
        {name: "계란지단", imageUrl: gyeranjidan},
        {name: "대파", imageUrl: daepa},
        {name: "약과", imageUrl: yakgwa},
        {name: "산적", imageUrl: sanjeok},
    ]

    const onClickEvent = (item) => {
        if (userIngredient[item.index] && userSelect.length < 4) {
            setUserIngredient(userIngredient => {
                return [
                    ...userIngredient.slice(0, item.index),
                    userIngredient[item.index] - 1,
                    ...userIngredient.slice(item.index + 1)
                ]
            })
            onAddItem({ingredientIndex: item.index, name: item.name, imageUrl: item.imageUrl});
        }
    }

    return (
        <styled.Wrapper>
            <styled.SubText>냉장고 안에 있는 재료</styled.SubText>
            <styled.Ingredients>
                {ingredient.map(({name, imageUrl}, index) =>
                    <styled.IngredientWrapper key={`ingredient-${index}`}
                                              active={userIngredient[index]}
                                              onClick={() => onClickEvent({index, name, imageUrl})}>
                        <styled.IngredientBox imageUrl={imageUrl}>
                            <styled.IngredientNumber>x {userIngredient[index]}</styled.IngredientNumber>
                            {!userIngredient[index] && <styled.IngredientLock/>}
                        </styled.IngredientBox>
                        <styled.IngredientText>{name}</styled.IngredientText>
                    </styled.IngredientWrapper>
                )}
                <styled.SpecialBox active={userIngredient[6]}
                                   onClick={() => onClickEvent({index: 6, name: "비밀의 재료", imageUrl: secretIngredient})}>
                    <styled.SpecialText>비밀의 재료</styled.SpecialText>
                    <styled.IngredientNumber>x {userIngredient[6] || 0}</styled.IngredientNumber>
                    {!userIngredient[6] && <styled.SecretLock/>}
                </styled.SpecialBox>
            </styled.Ingredients>
        </styled.Wrapper>
    );
};

export default Display;
