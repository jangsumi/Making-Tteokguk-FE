import React from 'react';
import * as styled from "./styles";
import x from '../../images/x.png';

const Menu = ({setMenuOpen}) => {

    const closeMenu=()=>{
        setMenuOpen(false)
    }
    
    return (
        <div>
            <styled.background onClick={closeMenu}/>
            <styled.menuBar>
                <img className='xButton'onClick={closeMenu} src={x}/>
                <styled.menuButton>떡국 만들기 설명서</styled.menuButton>
                <styled.menuButton>내 냉장고로 돌아가기</styled.menuButton>
                <styled.menuButton>나의 떡국</styled.menuButton>
                <styled.menuButton>자주 묻는 질문</styled.menuButton>
                <styled.menuButton>개발자에게 문의</styled.menuButton>
                <styled.menuButton>개발한 사람들 소개</styled.menuButton>
                <styled.menuButton>로그아웃</styled.menuButton>
            </styled.menuBar>
        </div>
    );
};

export default Menu;