import React from 'react';
import * as styled from './styles.jsx';

const MenualModal = ({close}) => {

    return (
        <styled.NoModalContainer>
            <styled.CloseImg onClick={close}/>
            <styled.Text fontSize={18} gap={17}>새해 맞이 떡국 만들기</styled.Text>
            <styled.LongText>2023년 새해를 맞아 떡국을 만들기로 했어요.  그런데 냉장고에 재료가 하나도 없는 거 있죠...<br/>
                어쩔 수 없이 친구들에게 재료를 사 와달라고<br/>
                부탁했답니다. <styled.ColorText>떡국 재료 4개</styled.ColorText>를 모아서 떡국을<br/>만들어 볼까요?
            </styled.LongText>

            <div>
                <styled.LongText bold fontSize={14}>
                    Q. 재료가 1개밖에 안 모였지만 얼른 떡국을 만들고 싶은데 어쩌죠?
                </styled.LongText>
                <styled.LongText fontSize={14}>
                    <styled.ColorText>‘비밀의 재료’</styled.ColorText>가 존재한다는 사실을 아시나요? <br></br><styled.ColorText>로그인한 상태로 친구에게 덕담을 작성</styled.ColorText>하면 비밀의 재료를 하나씩 얻을 수 있어요. 지금 떡국 재료가 1개밖에 없다면, 비밀의 재료를 3개 모으면 되겠죠? 로그인한 채로 덕담을 보내도 익명은 유지되니 걱정 마세요.
                </styled.LongText>
            </div>

            <div>
                <styled.LongText bold fontSize={14}>
                    Q. 저는 떡국에 뭐가 들어가는지 모르는데... 만들 수 있을까요?
                </styled.LongText>
                <styled.LongText fontSize={14}>
                    <styled.ColorText>‘떡국 조리법’</styled.ColorText> 참고해 보세요. 재료에 따라 떡국<br></br>의 모습이 달라진답니다. 여러 가지 떡국을 모아<br></br>보세요!
                </styled.LongText>
            </div>
        </styled.NoModalContainer>
    );
};

export default MenualModal;
