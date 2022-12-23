import React from 'react';
import Modal from "./Modal.jsx"
import * as styled from './styles.jsx';
import tteok from '../../images/tteok.svg';
import example from '../../images/example.svg';

const RecipeModal = ({close}) => {
    const recipe = [
        {text: "1. 네 가지 재료를 골고루 넣기", ingredient: [tteok,example,example,example]},
        {text: "2. 두 가지 재료만 넣기", ingredient: [tteok,tteok,example,example]},
        {text: "3. 한 가지 재료 3개 이상 넣기", ingredient: [tteok,tteok,tteok,example]},
        {text: "4. 이게 뭐지? 떡국에 이상한 재료 넣기", ingredient: [tteok,tteok,tteok,tteok]},
    ]
    return (
        <Modal close={close}>
            <styled.Text fontSize={18} gap={5}>비밀스러운 떡국 조리법</styled.Text>
            {recipe.map((item, index) => {
                return <div key={`recipe-${index}`}>
                    <styled.LongText gap={6}>{item.text}</styled.LongText>
                    <styled.BoxWrapper>
                        {item.ingredient.map((img,index) => {
                            return <styled.BoxWrapper key={`recipe-ingredient-${index}`}>
                                <styled.RecipeBox imageUrl={img}/>
                                <styled.PlusImg visible={index<3}/>
                            </styled.BoxWrapper>
                        })}
                    </styled.BoxWrapper>
                </div>
            })}

        </Modal>
    );
};

export default RecipeModal;
