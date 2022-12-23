import React from 'react';
import * as styled from "./styles";
import x from '../../images/x.png';
import manual from '../../images/manual.svg';
import myRefrigerator from '../../images/myRefrigerator.svg';
import riceCakeSoup from '../../images/riceCakeSoup.svg';
import question from '../../images/question.svg';
import toDeveloper from '../../images/toDeveloper.svg';
import developerInfo from '../../images/developerInfo.svg';
import logout from '../../images/logout.svg';

const Menu = ({setMenuOpen}) => {

    const closeMenu=()=>{
        setMenuOpen(false)
    }
    
    return (
        <div>
            <styled.background onClick={closeMenu}/>
            <styled.menuBar>
                <img className='xButton'onClick={closeMenu} src={x}/>
                <styled.menuButton><img src={manual}/>떡국 만들기 설명서</styled.menuButton>
                <styled.menuButton> <img src={myRefrigerator}/>내 냉장고로 돌아가기</styled.menuButton>
                <styled.menuButton><img src={riceCakeSoup}/>나의 떡국</styled.menuButton>
                <styled.menuButton><img src={question}/>자주 묻는 질문</styled.menuButton>
                <styled.menuButton><img src={toDeveloper}/>개발자에게 문의</styled.menuButton>
                <styled.menuButton><img src={developerInfo}/>개발한 사람들 소개</styled.menuButton>
                <styled.menuButton><img src={logout}/>로그아웃</styled.menuButton>
            </styled.menuBar>
        </div>
    );
};

export default Menu;