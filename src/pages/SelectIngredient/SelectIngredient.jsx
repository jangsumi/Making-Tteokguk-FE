import React, {useEffect, useRef, useState} from 'react';
import * as styled from "./styles";
import TopBar from "../../components/TopBar/TopBar.jsx";
import Display from "./Display.jsx";
import Selected from "./Selected.jsx";
import Button from "../../components/Button/Button.jsx";

const SelectIngredient = () => {
    const [userIngredient, setUserIngredient] = useState([0, 0, 0, 0, 0, 0, 0]);
    const [userSelect, setUserSelect] = useState([]);

    useEffect(() => {
        setUserIngredient([10, 11, 12, 0, 13, 14, 15]);
    }, []);

    const itemIdx = useRef(1);
    const onAddItem = (item) => {
        if (userSelect.length > 3) return;
        const ingredient = {
            idx: itemIdx.current,
            name: item.name,
            imageUrl: item.imageUrl,
        }
        setUserSelect(userSelect.concat(ingredient));
        itemIdx.current += 1;
    };
    const onRemoveItem = (item) => {
        setUserSelect(userSelect.filter(select => select.idx !== item.idx))
    }

    return (
        <div>
            <TopBar titleName="떡국 만들기" setDisplayRecipe="show"/>
            <styled.Container>
                <styled.TitleText>떡국에 넣을 재료를 선택해주세요</styled.TitleText>
                <Display userIngredient={userIngredient}
                         onAddItem={(item) => onAddItem(item)}/>
                <Selected userSelect={userSelect}
                          onRemoveItem={(item) => onRemoveItem(item)}/>

                <Button text="떡국 끓이기" pageName="/making"/>
            </styled.Container>
        </div>
    );
};

export default SelectIngredient;
