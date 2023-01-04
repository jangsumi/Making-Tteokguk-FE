import React, {useEffect, useRef, useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import * as styled from "./styles";
import TopBar from "../../components/TopBar/TopBar.jsx";
import Button from "../../components/Button/Button.jsx";
import RecipeModal from "../../components/Modal/RecipeModal.jsx";
import Display from "./Display.jsx";
import Selected from "./Selected.jsx";

const SelectIngredient = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { today } = location.state || false;
    const [userIngredient, setUserIngredient] = useState([0, 0, 0, 0, 0, 0, 0]);
    const [userSelect, setUserSelect] = useState([]);
    const [showRecipe, setShowRecipe] = useState(false);
    const itemIdx = useRef(1);

    useEffect(() => {
        setUserIngredient([10, 11, 12, 0, 13, 14, 15]);
    }, []);

    const onAddItem = (item) => {
        if (userSelect.length > 3) return;
        const ingredient = {
            idx: itemIdx.current,
            ingredientIndex: item.ingredientIndex,
            name: item.name,
            imageUrl: item.imageUrl,
        }
        setUserSelect(userSelect.concat(ingredient));
        itemIdx.current += 1;
    };

    const onRemoveItem = (item) => {
        setUserSelect(userSelect.filter(select => select.idx !== item.idx))
    }

    const onButtonClick = () => {
        navigate("/making", {state: {userSelect, today}});
        console.log(userSelect);
    }

    return (
        <div>
            <TopBar titleName="떡국 만들기" onRecipe={() => setShowRecipe(true)}/>
            <styled.Container>
                <styled.TitleText>떡국에 넣을 재료를 선택해 주세요</styled.TitleText>
                <Display userIngredient={userIngredient} userSelect={userSelect}
                         setUserIngredient={(userIngredient)=>setUserIngredient(userIngredient)}
                         onAddItem={(item) => onAddItem(item)}/>
                <Selected userSelect={userSelect}
                          setUserIngredient={(userIngredient)=>setUserIngredient(userIngredient)}
                          onRemoveItem={(item) => onRemoveItem(item)}/>
                <Button text="떡국 끓이기" active={userSelect.length===4} onClickEvent={onButtonClick}/>
            </styled.Container>
            {showRecipe && <RecipeModal close={() => setShowRecipe(false)}/>}
        </div>
    );
};

export default SelectIngredient;
