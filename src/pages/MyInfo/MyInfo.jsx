import React, {useState, useEffect} from "react";
import Message from "../../components/Message/Message";
import TopBar from "../../components/TopBar/TopBar";
import * as styled from "./styles";
import tgStrange from "../../images/tgStrange.svg";
import tgIdeal from "../../images/tgIdeal.svg";
import tgMyTaste from "../../images/tgMytaste.svg";
import tgSpicy from "../../images/tgSpicy.svg";
import tgOnlytteok from "../../images/tgOnlytteok.svg";
import tgOnlyegg from "../../images/tgOnlyegg.svg";
import tgBlack from "../../images/tgBlack.svg";
import tgFamilar from "../../images/tgFamiliar.svg";
import tgLove from "../../images/tgLove.svg";
import {getMyMessage} from "../../axios/ingredient-service";
import {useRecoilValue} from "recoil";
import {IDState} from "../../atom.jsx";
import {getMyFridge} from "../../axios/refrigerator-service.jsx";
import {useNavigate} from "react-router-dom";

const Cooked = ({unlock}) => {
    const infoTteokguk = [
        {index: 0, name: '뭔가 맛이 익숙한 떡국', imgSrc: tgFamilar},
        {index: 1, name: '사랑이 가득 담긴 떡국', imgSrc: tgLove},
        {index: 2, name: '이상한 떡국', imgSrc: tgStrange},
        {index: 3, name: '떡국이 떡만 있어서 떡국', imgSrc: tgOnlytteok},
        {index: 4, name: '먹물 떡국', imgSrc: tgBlack},
        {index: 5, name: '계란국을 빙자한 떡국', imgSrc: tgOnlyegg},
        {index: 6, name: '매운 떡국', imgSrc: tgSpicy},
        {index: 7, name: '취향이 보이는 떡국', imgSrc: tgMyTaste},
        {index: 8, name: '이상적인 떡국', imgSrc: tgIdeal},
    ]

    return (
        <styled.FlexBox>
            <styled.GridContainer>
                {infoTteokguk.map((item) => (
                    <styled.TteokgukWrapper
                        key={item.index}
                    >
                        <styled.Tteokguk background={item.imgSrc}>
                            {!unlock[item.index] && <styled.TteockgukLock/>}
                        </styled.Tteokguk>
                        <styled.FontDiv>
                            {unlock[item.index] ? item.name : "???"}
                        </styled.FontDiv>
                    </styled.TteokgukWrapper>
                ))}
            </styled.GridContainer>
        </styled.FlexBox>
    );
};

const MyInfo = () => {
    const userID = useRecoilValue(IDState);
    const navigate = useNavigate();
    const [unlock, setUnLock] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [currPage, setCurrPage] = useState(0);
    const [userMessage, setUserMessage] = useState([]);

    useEffect(() => {
        if (!userID.ref) return navigate('/');
        getMyMessage(userID.ref, true).then(r => {
            if (r) setUserMessage(r.filter((item) => item.type !== 6));
        });
        getMyFridge(userID.kakao).then(r => {
            setUnLock(r.unlockedRCS);
        })
    }, [])


    return (
        <styled.FlexBox direction="column" padding="0px 20px 40px">
            <TopBar titleName={"나의 떡국"}/>
            <styled.FlexBox aCenter={true}>
                <styled.NaviItem onClick={() => setCurrPage(0)} isCurr={currPage === 0}>
                    내가 만든 떡국
                </styled.NaviItem>
                <styled.NaviItem onClick={() => setCurrPage(1)} isCurr={currPage === 1}>
                    받은 덕담
                </styled.NaviItem>
            </styled.FlexBox>
            {currPage === 0 && <Cooked unlock={unlock}/>}
            {currPage === 1 &&
                <styled.MessageContainer>
                    <Message message={userMessage}/>
                </styled.MessageContainer>
            }
        </styled.FlexBox>
    );
};

export default MyInfo;
