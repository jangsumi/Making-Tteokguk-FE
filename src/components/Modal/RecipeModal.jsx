import React from 'react';
import Modal from "./Modal.jsx"
import * as styled from './styles.jsx';
import recipe1 from '../../images/recipe1.svg';
import recipe2 from '../../images/recipe2.svg';
import recipe3 from '../../images/recipe3.svg';
import recipe4 from '../../images/recipe4.svg';

const RecipeModal = ({close}) => {
    const recipe = [
        {text: "1. 네 가지 재료를 골고루 넣기", ingredient: recipe1},
        {text: "2. 두 가지 재료만 넣기", ingredient: recipe2},
        {text: "3. 한 가지 재료 3개 이상 넣기", ingredient: recipe3},
        {text: "4. 이게 뭐지? 떡국에 이상한 재료 넣기", ingredient: recipe4},
    ]
    return (
        <Modal close={close}>
            <styled.TextWrapper>
                <styled.Text fontSize={18} gap={5}>비밀스러운 떡국 조리법</styled.Text>
                {recipe.map((item, index) => {
                return <styled.RecipeWrapper key={`recipe-${index}`}>
                    <styled.RecipeText gap={6}>{item.text}</styled.RecipeText>
                    <styled.RecipeBox imageUrl={item.ingredient}/>
                </styled.RecipeWrapper>
            })}
            </styled.TextWrapper>
        </Modal>
    );
};

export default RecipeModal;
