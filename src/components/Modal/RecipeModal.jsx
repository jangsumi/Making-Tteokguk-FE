import React from 'react';
import Modal from "./Modal.jsx"
import * as styled from './styles.jsx';
import tteok from "../../images/tteok.svg";
import gim from "../../images/gim.svg";
import gyeranjidan from "../../images/gyeranjidan.svg";
import daepa from "../../images/daepa.svg";
import yakgwa from "../../images/yakgwa.svg";
import sanjeok from "../../images/sanjeok.svg";

const RecipeModal = ({close}) => {
    const recipe = [
        {text: "1. 네 가지 재료를 골고루 넣기", ingredient: [tteok,gim,gyeranjidan,daepa]},
        {text: "2. 두 가지 재료만 넣기", ingredient: [gim,gim,gyeranjidan,gyeranjidan]},
        {text: "3. 한 가지 재료 3개 이상 넣기", ingredient: [tteok,tteok,tteok,gyeranjidan]},
        {text: "4. 이게 뭐지? 떡국에 이상한 재료 넣기", ingredient: [yakgwa,gim,gyeranjidan,daepa]},
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
