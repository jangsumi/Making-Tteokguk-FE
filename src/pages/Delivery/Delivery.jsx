import React, { useState } from "react";
import Button from "../../components/Button/Button";
import TopBar from "../../components/TopBar/TopBar";
import test1 from "../../images/test1.svg";
import test2 from "../../images/test2.svg";
import * as styled from "./styles";

const IngredientComponent = ({
  setSelectedItem,
  selectedItem,
  index,
  list,
}) => {
  return (
    <styled.Ingredient
      onClick={() => {
        setSelectedItem(index);
      }}
    >
      {selectedItem === index && <styled.CheckMark />}
    </styled.Ingredient>
  );
};

const Delivery = () => {
  const [selectedItem, setSelectedItem] = useState(-1);
  const ingredients = [
    { name: "떡", imgSrc: test1 },
    { name: "김", imgSrc: test2 },
    { name: "계란지단", imgSrc: test1 },
    { name: "대파", imgSrc: test1 },
    { name: "약과", imgSrc: test1 },
    { name: "산적", imgSrc: test1 },
  ];

  return (
    <>
      <TopBar titleName={"떡국 재료 선물하기"} />
      <styled.PageContainer>
        <styled.FontDiv fontSize={"20px"} padding={"30px 0px 30px 0px"}>
          선물할 떡국 재료를 선택해주세요
        </styled.FontDiv>
        <IngredientComponent index={-1} />
        <styled.FontDiv fontSize={"18px"} padding={"14px 0px 14px 0px"}>
          선택된 재료 이름
        </styled.FontDiv>
        <styled.GridContainer>
          <IngredientComponent
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            index={0}
            list={ingredients[0]}
          />
          <IngredientComponent
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            index={1}
          />
          <IngredientComponent
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            index={2}
          />
          <IngredientComponent
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            index={3}
          />
          <IngredientComponent
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            index={4}
          />
          <IngredientComponent
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            index={5}
          />
        </styled.GridContainer>
        <Button text={"다음"} pageName={"/delivery2"} />
      </styled.PageContainer>
    </>
  );
};

export default Delivery;
