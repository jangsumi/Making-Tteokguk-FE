import React, {useState} from 'react';
import * as styled from "./styles";
import Menu from "./menu.jsx"
import closeRefrigerator from '../../images/refrigerator.png'
import openRefrigerator from '../../images/openRefrigerator.png'
import menu from '../../images/menu.png'
import lock from '../../images/lock.png'

const Refrigerator = () => {
    const [userName, setUserName] = useState("여섯글자별명"); 
    const [userSelf, setUserSelf] = useState(true);
    const [userOpen, setuUerOpen] = useState(true);
    const [refrigeratorImg, setRefrigeratorImg] = useState(closeRefrigerator)
    const [openOrClose, setOpenOrClose] = useState("close")
    const [buttonText, setButtonText] = useState("냉장고 열어보기")
    const [canMake, setCanMake] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)

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
            setButtonText("냉장고 닫기")
            setOpenOrClose("open")
        }
    }

    //user 본인
    if(userSelf){
        return (
            <styled.container>
                {menuOpen && <Menu setMenuOpen={setMenuOpen}/>}
                <styled.floor></styled.floor>
                <styled.menu src={menu} onClick={openMenu}/>
                <styled.Title>{userName} 님의 냉장고</styled.Title>
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
                <styled.floor></styled.floor>
                <styled.menu src={menu}/>
                <styled.Title>{userName} 님의 냉장고</styled.Title>
                <styled.refri className={openOrClose=="open"?'open':''} src={refrigeratorImg}/>
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