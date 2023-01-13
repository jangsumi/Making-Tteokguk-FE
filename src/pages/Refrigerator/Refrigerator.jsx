import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import * as styled from "./styles";
import Menu from "./Menu.jsx"
import ActiveModal from '../../components/Modal/ActiveModal.jsx';
import closeRefrigeratorGray from '../../images/closeRefrigeratorGray.svg'
import closeRefrigeratorBlack from '../../images/closeRefrigeratorBlack.svg'
import closeRefrigeratorYellow from '../../images/closeRefrigeratorYellow.svg'
import closeRefrigeratorBlue from '../../images/closeRefrigeratorBlue.svg'
import openRefrigeratorGray from '../../images/openRefrigeratorGray.svg'
import openRefrigeratorBlack from '../../images/openRefrigeratorBlack.svg'
import openRefrigeratorYellow from '../../images/openRefrigeratorYellow.svg'
import openRefrigeratorBlue from '../../images/openRefrigeratorBlue.svg'
import menu from '../../images/menu.png'
import lock from '../../images/lock.png'
import Toast from '../../components/Toast/Toast';
import {getFridgeWithLink} from "../../axios/refrigerator-service.jsx";
import {useRecoilValue} from "recoil";
import {IDState} from "../../atom.jsx";
import RecipeLoginModal from "../../components/Modal/RecipeLoginModal.jsx";
import CreateRefModal from '../../components/Modal/CreateRefModal.jsx';
import {getUnusedIngredients} from '../../axios/ingredient-service.jsx';
import {createTteokguk} from "../../axios/tteokguk-service.jsx";
import tgLove from "../../images/tgLove.svg";

const Refrigerator = () => {
    // 주소 복사 Toast 관리 State
    const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const linkInfo = location.pathname.split('/')[2];
    const {isFirst} = location.state || false;
    const userID = useRecoilValue(IDState);

    const [friendID, setFriendID] = useState(null);
    const [userName, setUserName] = useState("");
    const [userSelf, setUserSelf] = useState(true);
    const [userOpen, setUserOpen] = useState(true);
    const [closeRefrigerator, setCloseRefrigerator] = useState(closeRefrigeratorGray);
    const [openRefrigerator, openCloseRefrigerator] = useState(openRefrigeratorGray);
    const [refrigeratorImg, setRefrigeratorImg] = useState(closeRefrigerator)

    const [openOrClose, setOpenOrClose] = useState("close")
    const [buttonText, setButtonText] = useState("냉장고 열어보기")
    const [canMake, setCanMake] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)
    const [todayActive, setTodayActive] = useState(false);
    const [showLogin, setShowLogin] = useState(false); // 로그인한 사용자 = true, 비로그인 = false
    const [showCreateRef, setShowCreateRef] = useState(false);
    const [ingredientNums, setIngredientNums] = useState([0, 1, 5, 10, 100, 17, 50])
    const refColorList = [
        {close: closeRefrigeratorGray, open: openRefrigeratorGray},
        {close: closeRefrigeratorBlack, open: openRefrigeratorBlack},
        {close: closeRefrigeratorYellow, open: openRefrigeratorYellow},
        {close: closeRefrigeratorBlue, open: openRefrigeratorBlue},
    ]

    useEffect(() => {
        getFridgeWithLink(linkInfo).then(r => {
            console.log("내 정보: ", userID);
            console.log("링크 정보", r);
            const {id, color, nickname, secret} = r;
            if (!id) return navigate('/cannotFind');
            setFriendID(id);
            setUserName(nickname);
            setUserSelf(userID.ref === id);
            setUserOpen(secret);
            setCloseRefrigerator(refColorList[color].close);
            openCloseRefrigerator(refColorList[color].open);
            if (userSelf) {
                if (isFirst) setShowCreateRef(true);
                const now = new Date().toLocaleDateString();
                const newDay = new Date('2023-01-22').toLocaleDateString();
                setTodayActive(now === newDay);
            }
        });
        getUnusedIngredients(userID.ref).then(r => {
            console.log("가져온 재료 ", r);
            setIngredientNums(r);
        })
    }, []);

    useEffect(() => {
        setRefrigeratorImg(closeRefrigerator);
    }, [closeRefrigerator]);

    const copyClipBoard = async () => {
        await navigator.clipboard.writeText(window.location.href);
        setIsActive(true);
        setShowCreateRef(false);
    }

    const openMenu = () => {
        setMenuOpen(true)
    }

    const openTheDoor = () => {
        if (openOrClose === "open") {
            setRefrigeratorImg(closeRefrigerator)
            setButtonText("냉장고 열어보기")
            setOpenOrClose("close")
        } else {
            setRefrigeratorImg(openRefrigerator)
            console.log("openRefrigerator", openRefrigerator);
            setButtonText("냉장고 닫기")
            setOpenOrClose("open")
        }
    }

    const onActiveConfirmClick = () => {
        const allIngredient = [ingredientNums.map((v, index) => Array(v).fill(index))].flat(2);
        console.log(allIngredient);

        const body = {
            ingredientList: allIngredient,
            soupType: 1, // 사랑이 담긴 떡국
        }
        const loveTg = {text: '사랑이 가득 담긴 떡국', imageUrl: tgLove};
        createTteokguk(userID.ref, body).then(r => {
            navigate("/making", {state: {message: r, tgType: loveTg}});
        });
    }

    const isShowLoginModal = () => {
        if (!userID.ref) setShowLogin(true);
        else onDeliveryPage();
    }

    const onLoginEvent = () => {
        // kakao login 코드 작성

        onDeliveryPage();
    }

    const onDeliveryPage = () => {
        navigate('/delivery', {state: {friendRef: friendID, redirectLink: linkInfo}});
    }

    //user 본인
    if (userSelf) {
        return (
            <>
                <styled.floor/>
                <styled.container>
                    {todayActive && <ActiveModal onConfirmClick={onActiveConfirmClick}
                                                 onCancelClick={() => setTodayActive(false)}/>}
                    {showCreateRef && <CreateRefModal onConfirmClick={() => copyClipBoard()}
                                                      onCancelClick={() => setShowCreateRef(false)}/>}
                    <styled.menu src={menu} onClick={openMenu}/>
                    <styled.title>{userName} 님의 냉장고</styled.title>
                    <styled.info>떡국 재료를 4개 모아보세요.<br/>떡국을 끓이면 덕담을 볼 수 있답니다!</styled.info>
                    <styled.RefriContainer>
                        {openOrClose === "open" &&
                            <styled.ingredientNums className={openOrClose}>
                                {['떡', '김', '계란지단', '대파', '약과', '산적', '비밀의 재료'].map((text, index) => {
                                    return <styled.ingredientText
                                        key={`ref-${text}-${index}`}>{text} x {ingredientNums[index]}<br/>
                                    </styled.ingredientText>
                                })}
                            </styled.ingredientNums>
                        }
                        <styled.refri className={openOrClose} src={refrigeratorImg}/>
                    </styled.RefriContainer>
                    {menuOpen && <Menu setMenuOpen={setMenuOpen}/>}
                    <styled.ButtonWrapper>
                        {openOrClose === "open" ?
                            <styled.bottonBox>
                                <styled.customButton className="make" disabled={!canMake}
                                                     onClick={() => navigate('/selectIngredient')}>
                                    {canMake ? '' : <img className="lock" src={lock}/>}
                                    떡국 끓이기
                                </styled.customButton>
                                <styled.customButton className="cancel" onClick={openTheDoor}>닫기</styled.customButton>
                            </styled.bottonBox>
                            :
                            <styled.customButton onClick={openTheDoor}>{buttonText}</styled.customButton>
                        }
                        <styled.customButton last onClick={() => copyClipBoard()}>나의 냉장고 주소 복사하기</styled.customButton>
                    </styled.ButtonWrapper>
                    <styled.FlexBox>
                        <Toast
                            isActive={isActive}
                            setIsActive={setIsActive}
                            message={`주소 복사 완료!\n친구에게 내 냉장고를 공유해 보세요.`}
                        />
                    </styled.FlexBox>
                </styled.container>
            </>
        )
    }
    //user 타인 & 열기 허용
    else {
        return (
            <>
                <styled.floor/>
                <styled.container>
                    {showLogin && <RecipeLoginModal onConfirmClick={onLoginEvent} onCancelClick={onDeliveryPage}/>}
                    {menuOpen && <Menu setMenuOpen={setMenuOpen}/>}
                    <styled.menu src={menu} onClick={openMenu}/>
                    <styled.title>{userName} 님의 냉장고</styled.title>
                    <styled.info>떡국 재료를 4개 모아보세요.<br/>떡국을 끓이면 덕담을 볼 수 있답니다!</styled.info>

                    <styled.RefriContainer>
                        {openOrClose === "open" &&
                            <styled.ingredientNums className={openOrClose}>
                                {['떡', '김', '계란지단', '대파', '약과', '산적', '비밀의 재료'].map((text, index) => {
                                    return <styled.ingredientText
                                        key={`ref-${text}-${index}`}>{text} x {ingredientNums[index]}<br/>
                                    </styled.ingredientText>
                                })}
                            </styled.ingredientNums>
                        }
                        <styled.refri className={openOrClose} src={refrigeratorImg}/>
                    </styled.RefriContainer>

                    <styled.ButtonWrapper>
                        <styled.customButton onClick={openTheDoor} disabled={!userOpen}>
                            {userOpen ? '' : <img className="lock" src={lock}/>}
                            {buttonText}
                        </styled.customButton>
                        <styled.customButton last onClick={isShowLoginModal}>떡국 재료 선물하기</styled.customButton>
                    </styled.ButtonWrapper>
                </styled.container>
            </>
        )
    }
};

export default Refrigerator;
