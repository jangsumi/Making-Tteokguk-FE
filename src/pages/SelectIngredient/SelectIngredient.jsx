import React, {useEffect, useRef, useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import * as styled from "./styles";
import TopBar from "../../components/TopBar/TopBar.jsx";
import Button from "../../components/Button/Button.jsx";
import RecipeModal from "../../components/Modal/RecipeModal.jsx";
import Display from "./Display.jsx";
import Selected from "./Selected.jsx";
import tgFamilar from "../../images/tgFamiliar.svg";
import tgLove from "../../images/tgLove.svg";
import tgStrange from "../../images/tgStrange.svg";
import tgOnlytteok from "../../images/tgOnlytteok.svg";
import tgBlack from "../../images/tgBlack.svg";
import tgOnlyegg from "../../images/tgOnlyegg.svg";
import tgSpicy from "../../images/tgSpicy.svg";
import tgMytaste from "../../images/tgMytaste.svg";
import tgIdeal from "../../images/tgIdeal.svg";

const SelectIngredient = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { today } = location.state || false;
    const [userIngredient, setUserIngredient] = useState([0, 0, 0, 0, 0, 0, 0]);
    const [userSelect, setUserSelect] = useState([]);
    const [showRecipe, setShowRecipe] = useState(false);
    const itemIdx = useRef(1);

    const tgType = [
        {text: '뭔가 맛이 익숙한 떡국', imageUrl: tgFamilar},
        {text: '사랑이 가득 담긴 떡국', imageUrl: tgLove},
        {text: '이상한 떡국', imageUrl: tgStrange},
        {text: '떡국이 떡만 있어서 떡국', imageUrl: tgOnlytteok},
        {text: '먹물 떡국', imageUrl: tgBlack},
        {text: '계란국을 빙자한 떡국', imageUrl: tgOnlyegg},
        {text: '매운 떡국', imageUrl: tgSpicy},
        {text: '취향이 보이는 떡국', imageUrl: tgMytaste},
        {text: '이상적인 떡국', imageUrl: tgIdeal},
    ]

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
    };

    const onButtonClick = () => {
        const tgIdx = decideTg();
        navigate("/making", {state: {tgType: tgType[tgIdx]}});
    };

    const decideTg = () => {
        const ingredient = userSelect.map((item)=>item.ingredientIndex);
        ingredient.sort();
        if (ingredient[3] === 6) return 0;
        else if (today) return 1;
        else if (ingredient[3] === 5 || ingredient[3] === 4) return 2;
        else if (ingredient[1] === ingredient[2]) {
            if (ingredient[0] === ingredient[1] || ingredient[2] === ingredient[3]) return ingredient[1]+3;
        }
        else if (ingredient[0] === ingredient[1] && ingredient[2] === ingredient[3]) return 7;
        return 8;
    }

    return (
        <div style={{maxWidth:"480px",margin: "0 auto"}}>
            <TopBar titleName="떡국 만들기" onRecipe={() => setShowRecipe(true)}/>
            <styled.Container>
                <styled.TitleText>떡국에 넣을 재료를 선택해 주세요</styled.TitleText>
                <Display userIngredient={userIngredient} userSelect={userSelect}
                         setUserIngredient={(userIngredient)=>setUserIngredient(userIngredient)}
                         onAddItem={(item) => onAddItem(item)}/>
                <Selected userSelect={userSelect}
                          setUserIngredient={(userIngredient)=>setUserIngredient(userIngredient)}
                          onRemoveItem={(item) => onRemoveItem(item)}/>
                <Button text="떡국 끓이기" active={userSelect.length===4} onClickEvent={onButtonClick} />
            </styled.Container>
            {showRecipe && <RecipeModal close={() => setShowRecipe(false)}/>}
        </div>
    );
};

export default SelectIngredient;
