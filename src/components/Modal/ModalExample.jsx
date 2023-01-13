import React, {useState} from 'react';
import ResultModal from './ResultModal.jsx';
import CreateRefModal from './CreateRefModal.jsx';
import RecipeLoginModal from './RecipeLoginModal.jsx';
import LoginModal from './LoginModal.jsx';
import MessageModal from './MessageModal.jsx';
import MenualModal from './MenualModal.jsx';
import RecipeModal from './RecipeModal.jsx';
import SecretIngredientModal from './SecretIngredientModal.jsx'

const ModalExample = () => {
    const [showModal, setShowModal] = useState(false);

    const confirmEvent = (type) => {
        setShowModal(false);
        console.log(type + ": confirm")
    }

    const cancelEvent = (type) => {
        setShowModal(false);
        console.log(type + ": cancel")
    }

    return (
        <>
            <div onClick={()=>setShowModal(true)}>showModal</div>
            {showModal &&
                // <ResultModal tg={{text: '뭔가 맛이 익숙한 떡국', imageUrl: tgFamilar}} onConfirmClick={()=>confirmEvent('result')}/>
                // <CreateRefModal onConfirmClick={()=>confirmEvent('createRef')} onCancelClick={()=>cancelEvent('createRef')}/>
                // <RecipeLoginModal onConfirmClick={()=>confirmEvent('login')} onCancelClick={()=>cancelEvent('login')}/>
                <LoginModal onConfirmClick={()=>confirmEvent('login')} onCancelClick={()=>cancelEvent('login')}/>
                // <MessageModal onConfirmClick={()=>confirmEvent('message')} secret={false}/>
                // <MenualModal close={()=>cancelEvent('info')}/>
                // <RecipeModal close={()=>cancelEvent('recipe')}/>
                // <SecretIngredientModal onConfirmClick={()=>confirmEvent('secretIngredient')} />
            }
        </>
    );
};

export default ModalExample;

