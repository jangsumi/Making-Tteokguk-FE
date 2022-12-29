import React from 'react';
import * as styled from "./styles";
import tteok from "../../images/tteok.svg";
import gim from "../../images/gim.svg";
import gyeranjidan from "../../images/gyeranjidan.svg";
import daepa from "../../images/daepa.svg";
import yakgwa from "../../images/yakgwa.svg";
import sanjeok from "../../images/sanjeok.svg";
import secretIngredient from "../../images/secretIngredient.svg";

const Message = ({message}) => {
    const ingredientImage = {"떡": tteok, "김": gim, "계란지단": gyeranjidan,
                             "대파": daepa, "약과": yakgwa, "산적": sanjeok, "비밀": secretIngredient};

    return (
        <styled.Wrapper>
            {message.map((item, index) => {
                return <styled.MessageContainer key={`message-${item.username}-${item.ingredient}-${index}`}>
                    <styled.IngredientBox imageUrl={ingredientImage[item.ingredient]}/>
                    <styled.TextWrapper>
                        <styled.Text>{item.username}</styled.Text>
                        <styled.MessageBox>{item.content}</styled.MessageBox>
                    </styled.TextWrapper>
                </styled.MessageContainer>
            })}
        </styled.Wrapper>
    );
};

export default Message;
