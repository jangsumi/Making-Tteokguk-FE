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
import closeRefSamsung from '../../images/closeRefSamsung.png'
import closeRefFlowerText from '../../images/closeRefFlowerText.png'
import closeRefFlower from '../../images/closeRefFlower.png'
import closeRefPink from '../../images/closeRefPink.png'
import closeRefGold from '../../images/closeRefGold.png'
import closeRefSilver from '../../images/closeRefSilver.png'
import closeRefText from '../../images/closeRefText.png'
import closeRefNoDev from '../../images/closeRefNoDev.png'
import openRefSamsung from '../../images/openRefSamsung.png'
import openRefFlowerText from '../../images/openRefFlowerText.png'
import openRefFlower from '../../images/openRefFlower.png'
import openRefPink from '../../images/openRefPink.png'
import openRefGold from '../../images/openRefGold.png'
import openRefSilver from '../../images/openRefSilver.png'
import openRefText from '../../images/openRefText.png'
import openRefNoDev from '../../images/openRefNoDev.png'
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
import LoginModal from "../../components/Modal/LoginModal.jsx";

const Refrigerator = () => {
    // ?????? ?????? Toast ?????? State
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
    const [buttonText, setButtonText] = useState("????????? ????????????")
    const [canMake, setCanMake] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [todayActive, setTodayActive] = useState(false);
    const [showRecipeLogin, setShowRecipeLogin] = useState(false); // ???????????? ????????? = true, ???????????? = false
    const [showLogin, setShowLogin] = useState(false);
    const [showCreateRef, setShowCreateRef] = useState(false);
    const [ingredientNums, setIngredientNums] = useState([0, 1, 5, 10, 100, 17, 50])
    const refColorList = [
        {close: closeRefrigeratorGray, open: openRefrigeratorGray},
        {close: closeRefrigeratorBlack, open: openRefrigeratorBlack},
        {close: closeRefrigeratorYellow, open: openRefrigeratorYellow},
        {close: closeRefrigeratorBlue, open: openRefrigeratorBlue},
        {close: closeRefSamsung, open: openRefSamsung},
        {close: closeRefFlower, open: openRefFlower},
        {close: closeRefFlowerText, open: openRefFlowerText},
        {close: closeRefPink, open: openRefPink},
        {close: closeRefSilver, open: openRefSilver},
        {close: closeRefGold, open: openRefGold},
        {close: closeRefText, open: openRefText},
        {close: closeRefNoDev, open: openRefNoDev},
    ]
    const ingredientList = ['???', '???', '????????????', '??????', '??????', '??????', '????????? ??????'];

    useEffect(() => {
        getFridgeWithLink(linkInfo).then(r => {
            const {id, color, nickname, secret} = r;
            if (!id) return navigate('/cannotFind');
            setFriendID(id);
            setUserName(nickname);
            setUserSelf(userID.ref === id);
            setUserOpen(secret);
            setCloseRefrigerator(refColorList[color].close);
            openCloseRefrigerator(refColorList[color].open);

            getUnusedIngredients(id).then(res => {
                setIngredientNums(res);
                const now = new Date().toLocaleDateString();
                const newDay = new Date('2023-01-14').toLocaleDateString();
                const sum = res.reduce((a, b) => a + b, 0);
                if (userSelf) {
                    if (isFirst) setShowCreateRef(true);
                    if (now === newDay) setTodayActive(sum !== 0);
                    if (sum >= 4) setCanMake(true);
                }
            });
        });
    }, []);

    useEffect(() => {
        setRefrigeratorImg(closeRefrigerator);
    }, [closeRefrigerator]);

    const copyClipBoard = async () => {
        await navigator.clipboard.writeText(window.location.href);
        setIsActive(true);
        setShowCreateRef(false);
    }

    const openTheDoor = () => {
        if (openOrClose === "open") {
            setRefrigeratorImg(closeRefrigerator)
            setButtonText("????????? ????????????")
            setOpenOrClose("close")
        } else {
            setRefrigeratorImg(openRefrigerator)
            setButtonText("????????? ??????")
            setOpenOrClose("open")
        }
    }

    const onActiveConfirmClick = () => {
        const allIngredient = [ingredientNums.map((v, index) => Array(v).fill(index))].flat(2);

        const body = {
            ingredientList: allIngredient,
            soupType: 1, // ????????? ?????? ??????
        }
        const loveTg = {text: '????????? ?????? ?????? ??????', imageUrl: tgLove};
        createTteokguk(userID.ref, body).then(r => {
            navigate("/making", {state: {message: r, tgType: loveTg}});
        });
    }

    const isShowMenuModal = () => {
        if (!userID.ref) setShowLogin(true);
        else setMenuOpen(true);
    }

    const isShowRecipeLoginModal = () => {
        if (!userID.ref) setShowRecipeLogin(true);
        else onDeliveryPage();
    }

    const onDeliveryPage = () => {
        navigate('/delivery', {state: {friendRef: friendID, redirectLink: linkInfo}});
    }

    //user ??????
    if (userSelf) {
        return (
            <>
                <styled.Block/>
                <styled.floor/>
                <styled.container>
                    {todayActive && <ActiveModal onConfirmClick={onActiveConfirmClick}
                                                 onCancelClick={() => setTodayActive(false)}/>}
                    {showCreateRef && <CreateRefModal onConfirmClick={() => copyClipBoard()}
                                                      onCancelClick={() => setShowCreateRef(false)}/>}
                    <styled.menu src={menu} onClick={()=>setMenuOpen(true)}/>
                    <styled.title>{userName} ?????? ?????????</styled.title>
                    <styled.info>?????? ????????? 4??? ???????????????.<br/>????????? ????????? ????????? ??? ??? ????????????!</styled.info>
                    <styled.RefriContainer>
                        {openOrClose === "open" &&
                            <styled.ingredientNums className={openOrClose}>
                                {ingredientList.map((text, index) => {
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
                                    ?????? ?????????
                                </styled.customButton>
                                <styled.customButton className="cancel" onClick={openTheDoor}>??????</styled.customButton>
                            </styled.bottonBox>
                            :
                            <styled.customButton onClick={openTheDoor}>{buttonText}</styled.customButton>
                        }
                        <styled.customButton last onClick={() => copyClipBoard()}>?????? ????????? ?????? ????????????</styled.customButton>
                    </styled.ButtonWrapper>
                    <styled.FlexBox>
                        <Toast
                            isActive={isActive}
                            setIsActive={setIsActive}
                            message={`?????? ?????? ??????!\n???????????? ??? ???????????? ????????? ?????????.`}
                        />
                    </styled.FlexBox>
                </styled.container>
                <styled.Block long/>
            </>
        )
    }
    //user ?????? & ?????? ??????
    else {
        return (
            <>
                <styled.Block/>
                <styled.floor/>
                <styled.container>
                    {showRecipeLogin && <RecipeLoginModal onCancelClick={onDeliveryPage}/>}
                    {showLogin && <LoginModal onCancelClick={()=>setShowLogin(false)}/>}
                    {menuOpen && <Menu setMenuOpen={setMenuOpen}/>}
                    <styled.menu src={menu} onClick={isShowMenuModal}/>
                    <styled.title>{userName} ?????? ?????????</styled.title>
                    <styled.info>?????? ????????? 4??? ???????????????.<br/>????????? ????????? ????????? ??? ??? ????????????!</styled.info>

                    <styled.RefriContainer>
                        {openOrClose === "open" &&
                            <styled.ingredientNums className={openOrClose}>
                                {ingredientList.map((text, index) => {
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
                        <styled.customButton last onClick={isShowRecipeLoginModal}>?????? ?????? ????????????</styled.customButton>
                    </styled.ButtonWrapper>
                </styled.container>
                <styled.Block long/>
            </>
        )
    }
};

export default Refrigerator;
