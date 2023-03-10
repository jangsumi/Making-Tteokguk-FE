import React, {useEffect, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import TopBar from "../../components/TopBar/TopBar";
import tteok from "../../images/tteok.svg";
import gim from "../../images/gim.svg";
import gyeranjidan from "../../images/gyeranjidan.svg";
import daepa from "../../images/daepa.svg";
import yakgwa from "../../images/yakgwa.svg";
import sanjeok from "../../images/sanjeok.svg";
import empty from "../../images/whiteBox.svg";
import * as styled from "./styles";

const IngredientComponent = ({
  disabled,
  setSelectedItem,
  setCurrItemSrc,
  setCurrItemName,
  selectedItem,
  index,
  imgBg,
  name,
}) => {

  const onClickEvent = () => {
    setSelectedItem(index);
    setCurrItemSrc(imgBg);
    setCurrItemName(name);
  }
  return (
    <styled.Ingredient
      onClick={!disabled? onClickEvent:undefined}
      imgBg={imgBg}
    >
      {selectedItem === index && <styled.CheckMark />}
    </styled.Ingredient>
  );
};

const Delivery = () => {
  const [selectedItem, setSelectedItem] = useState(-1);
  const [currItemSrc, setCurrItemSrc] = useState(empty);
  const [currItemName, setCurrItemName] = useState("ㅤ");
  const navigate = useNavigate();
  const location = useLocation();
  const { friendRef, redirectLink } = location.state || false;

  const ingredientList = [
    { index: 0, imgBg: tteok, name: "홍철 없는 홍철 팀 방지용 떡" },
    { index: 1, imgBg: gim, name: "간이 안 맞으면 김 잔뜩 넣기" },
    { index: 2, imgBg: gyeranjidan, name: "계란지단을 국수 면만큼 넣기" },
    { index: 3, imgBg: daepa, name: "파 송송 대파 탁" },
    { index: 4, imgBg: yakgwa, name: "윤기 좌르르 꿀 바른 약과" },
    { index: 5, imgBg: sanjeok, name: "산적을 산 적 있나요?" },
  ];

  useEffect(()=> {
    if (!friendRef) navigate('/cannotfind');
  },[]);

  const onButtonClick = () => {
    navigate("/delivery2", { state: { friendRef, ingredient: selectedItem, redirectLink } });
  };

  return (
    <styled.Wrapper>
      <TopBar titleName={"떡국 재료 선물하기"} />
      <styled.PageContainer>
        <styled.FontDiv fontSize={"20px"} padding={"30px 0px 30px 0px"}>
          <styled.Enter>선물할 떡국 재료를</styled.Enter>
          <styled.Enter>선택해 주세요.</styled.Enter>
        </styled.FontDiv>
        <IngredientComponent disabled index={-1} imgBg={currItemSrc} />
        <styled.FontDiv fontSize={"18px"} padding={"14px 0px 14px 0px"}>
          {currItemName}
        </styled.FontDiv>
        <styled.GridContainer>
          {ingredientList.map((item) => (
            <IngredientComponent
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              setCurrItemSrc={setCurrItemSrc}
              setCurrItemName={setCurrItemName}
              key={item.index}
              index={item.index}
              imgBg={item.imgBg}
              name={item.name}
            />
          ))}
        </styled.GridContainer>

        <Button
            text={"다음"}
            onClickEvent={onButtonClick}
            active={selectedItem !== -1}
        />
      </styled.PageContainer>
    </styled.Wrapper>
  );
};

export default Delivery;
