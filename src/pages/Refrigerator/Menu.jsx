import React, {useEffect, useState} from 'react';
import * as styled from "./styles";
import x from '../../images/x.png';
import manual from '../../images/manual.svg';
import myRefrigerator from '../../images/myRefrigerator.svg';
import riceCakeSoup from '../../images/riceCakeSoup.svg';
import question from '../../images/question.svg';
import toDeveloper from '../../images/toDeveloper.svg';
import developerInfo from '../../images/developerInfo.svg';
import logout from '../../images/logout.svg';
import MenualModal from '../../components/Modal/MenualModal';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { IDState } from '../../atom';

const Menu = ({setMenuOpen}) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const userID = useRecoilValue(IDState)
    const logoutState = useResetRecoilState(IDState);

    useEffect(() => {
        document.body.style.cssText = `
            position: fixed;
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);

    const cancelEvent = () => {
        setShowModal(false);
    }

    const closeMenu=()=>{
        setMenuOpen(false)
    }

    const returnMyRef = () =>  {
        if (userID.ref) {
            navigate(`/refrigerator/${userID.link}`);
            window.location.reload(); // 코드 개선
            closeMenu();
        } else {
            alert('로그인 모달로 대체할 예정');
        }
    }

    const LogOut = () => {
        // atom 값 초기화 (실제 출시에서는 default가 null일 것)
        logoutState(IDState);
        // 카카오 로그아웃 api 관련 코드 작성 예정
        navigate('/');
    }

    return (
            <styled.background>
            <styled.menuBar>
                <img className='xButton' onClick={closeMenu} src={x}/>
                <styled.menuButton onClick={()=>setShowModal(true)}><img src={manual}/>떡국 만들기 설명서</styled.menuButton>
                {showModal &&
                <MenualModal close={()=>cancelEvent('info')}/>}
                <styled.menuButton onClick={() => returnMyRef()}><img src={myRefrigerator}/>내 냉장고로 돌아가기</styled.menuButton>
                <styled.menuButton onClick={() => navigate('/myinfo')}><img src={riceCakeSoup}/>나의 떡국</styled.menuButton>
                <styled.menuButton onClick={() => window.open('https://www.notion.so/kkamantokki/9597d7e1708c4bd98f184fc6da6f4a18')}><img src={question}/>자주 묻는 질문</styled.menuButton>
                <styled.menuButton onClick={() => window.open('https://www.notion.so/kkamantokki/d8b5a61ac5e24c3eb2933efb570bf5d8')}><img src={toDeveloper}/>개발자에게 문의</styled.menuButton>
                <styled.menuButton onClick={() => window.open('https://kkamantokki.notion.site/2023-836477e651e24ecb9e76db9ce210e646')}><img src={developerInfo}/>까만토끼 소개</styled.menuButton>
                <styled.menuButton onClick={LogOut}><img src={logout}/>로그아웃</styled.menuButton>
            </styled.menuBar>
        </styled.background>
    );
};

export default Menu;
