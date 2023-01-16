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
    const ingredientImage = {0: tteok, 1: gim, 2: gyeranjidan,
                             3: daepa, 4: yakgwa, 5: sanjeok, 6: secretIngredient};
    if (!message?.length) return (
        <styled.Container>받은 덕담이 없습니다 ٩(๑•̀o•́๑)و</styled.Container>
    )
    else return (
        <styled.Wrapper>
            {message.map((item, index) => {
                return <styled.MessageContainer key={`message-${item.title}-${item.ingredient}-${index}`}>
                    <styled.IngredientBox imageUrl={ingredientImage[item.type]}/>
                    <styled.TextWrapper>
                        <styled.Text>{item.title}</styled.Text>
                        <styled.MessageBox>{item.content}</styled.MessageBox>
                    </styled.TextWrapper>
                </styled.MessageContainer>
            })}
        </styled.Wrapper>
    );
};

export default Message;
