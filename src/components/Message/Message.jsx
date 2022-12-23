import React from 'react';
import * as styled from "./styles";
import tteok from '../../images/tteok.svg';
import example from '../../images/example.svg';

const Message = ({message}) => {
    const ingredientImage = {"떡": tteok, "김": example, "계란지단": tteok,
                             "대파": tteok, "약과": example, "산적": tteok, "비밀": example};

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
