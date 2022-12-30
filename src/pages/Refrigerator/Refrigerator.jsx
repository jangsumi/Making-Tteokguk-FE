import React, {useState} from 'react';
import * as styled from "./styles";
import Menu from "./menu.jsx"
import closeRefrigeratorGray from  '../../images/closeRefrigeratorGray.svg'
import closeRefrigeratorBlack from  '../../images/closeRefrigeratorBlack.svg'
import closeRefrigeratorYellow from  '../../images/closeRefrigeratorYellow.svg'
import closeRefrigeratorBlue from  '../../images/closeRefrigeratorBlue.svg'
import openRefrigeratorGray from  '../../images/openRefrigeratorGray.svg'
import openRefrigeratorBlack from  '../../images/openRefrigeratorBlack.svg'
import openRefrigeratorYellow from  '../../images/openRefrigeratorYellow.svg'
import openRefrigeratorBlue from  '../../images/openRefrigeratorBlue.svg'
import ingredient from '../../images/ingredient.png'
import menu from '../../images/menu.png'
import lock from '../../images/lock.png'

const Refrigerator = () => {
    const [userName, setUserName] = useState("여섯글자별명"); 
    const [userSelf, setUserSelf] = useState(false);
    const [userOpen, setuUerOpen] = useState(true);
    const [closeRefrigerator, setCloseRefrigerator] = useState(closeRefrigeratorBlack);
    const [openRefrigerator, openCloseRefrigerator] = useState(openRefrigeratorBlack);

    const [refrigeratorImg, setRefrigeratorImg] = useState(closeRefrigerator)
    const [openOrClose, setOpenOrClose] = useState("close")
    const [buttonText, setButtonText] = useState("냉장고 열어보기")
    const [canMake, setCanMake] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)

    const [ingredientNums,setIngredientNums ] = useState([0,1,5,10,100,17,50])

    const openMenu = () => {
        setMenuOpen(true)
    }

    const openTheDoor = (e) => {
        if(openOrClose=="open"){
            setRefrigeratorImg(closeRefrigerator)
            setButtonText("냉장고 열기")
            setOpenOrClose("close")
        }
        else{
            setRefrigeratorImg(openRefrigerator)
            console.log("openRefrigerator",openRefrigerator);
            setButtonText("냉장고 닫기")
            setOpenOrClose("open")
        }
    }

    //user 본인
    if(userSelf){
        return (
            <styled.container>
                {menuOpen && <Menu setMenuOpen={setMenuOpen}/>}
                <styled.floor/>
                <styled.menu src={menu} onClick={openMenu}/>
                <styled.title>{userName} 님의 냉장고</styled.title>
                <styled.info>떡국 재료를 4개 모아보세요.<br></br>떡국을 끓이면 덕담을 볼 수 있답니다!</styled.info>
                {openOrClose=="open"?
                <styled.ingredientNums>
                    <text>떡 x {ingredientNums[0]}<br></br></text>  
                    <text>김 x {ingredientNums[1]}<br></br></text>
                    <text>계란지단 x {ingredientNums[2]}<br></br></text>  
                    <text>대파 x {ingredientNums[3]}<br></br></text>
                    <text>약과 x {ingredientNums[4]}<br></br></text>
                    <text>산적 x {ingredientNums[5]}<br></br></text>  
                    <text>비밀의 재료 x {ingredientNums[6]}<br></br></text>
                </styled.ingredientNums>:''}
                <styled.refri className={openOrClose=="open"?'open':''} src={refrigeratorImg}/>  
                {openOrClose=="open"?
                <styled.bottonBox>
                    <styled.customButton className="make"  disabled={!canMake} >
                    {canMake?'':<img className="lock" src={lock}/>}
                    떡국 끓이기</styled.customButton>
                    <styled.customButton className="cancle" onClick={openTheDoor}>닫기</styled.customButton>
                </styled.bottonBox>
                :<styled.customButton onClick={openTheDoor}>{buttonText}</styled.customButton>}
                <styled.customButton>나의 냉장고 주소 복사하기</styled.customButton>
            </styled.container>

        )
    }
    //user 타인 & 열기 허용
    else{
        return(
            <styled.container>
                {menuOpen && <Menu setMenuOpen={setMenuOpen}/>}
                <styled.floor/>
                <styled.menu src={menu} onClick={openMenu}/>
                <styled.title>{userName} 님의 냉장고</styled.title>
                <styled.info>떡국 재료를 4개 모아보세요.<br></br>떡국을 끓이면 덕담을 볼 수 있답니다!</styled.info>
                <styled.refri className={openOrClose=="open"?'open':''} src={refrigeratorImg}/>
                {openOrClose=="open"?
                <styled.ingredientNums>
                    <text>떡 x {ingredientNums[0]}<br></br></text>  
                    <text>김 x {ingredientNums[1]}<br></br></text>
                    <text>계란지단 x {ingredientNums[2]}<br></br></text>  
                    <text>대파 x {ingredientNums[3]}<br></br></text>
                    <text>약과 x {ingredientNums[4]}<br></br></text>
                    <text>산적 x {ingredientNums[5]}<br></br></text>  
                    <text>비밀의 재료 x {ingredientNums[6]}<br></br></text>
                </styled.ingredientNums>:''}
                <styled.customButton onClick={openTheDoor} disabled={!userOpen}>
                    {userOpen?'':<img className="lock" src={lock}/>}
                    {buttonText}
                </styled.customButton>
                <styled.customButton>떡국 재료 선물하기</styled.customButton>
            </styled.container>
        )
    }
};

export default Refrigerator;