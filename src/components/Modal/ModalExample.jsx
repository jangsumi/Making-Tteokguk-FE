import React, {useState} from 'react';
import ResultModal from './ResultModal.jsx';
import CreateRefModal from './CreateRefModal.jsx';
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
                // <ResultModal onConfirmClick={()=>confirmEvent('result')}/>
                // <CreateRefModal onConfirmClick={()=>confirmEvent('createRef')} onCancelClick={()=>cancelEvent('createRef')}/>
                // <LoginModal onConfirmClick={()=>confirmEvent('login')} onCancelClick={()=>cancelEvent('login')}/>
                // <MessageModal onConfirmClick={()=>confirmEvent('message')} secret={true}/>
                // <MenualModal close={()=>cancelEvent('info')}/>
                // <RecipeModal close={()=>cancelEvent('recipe')}/>
                <SecretIngredientModal onConfirmClick={()=>confirmEvent('secretIngredient')} />
            }
        </>
    );
};

export default ModalExample;

