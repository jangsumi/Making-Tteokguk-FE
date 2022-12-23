import React, {useState} from 'react';
import ResultModal from '../../components/Modal/ResultModal.jsx';
import CreateRefModal from '../../components/Modal/CreateRefModal.jsx';
import LoginModal from '../../components/Modal/LoginModal.jsx';
import MessageModal from '../../components/Modal/MessageModal.jsx';
import InfoModal from '../../components/Modal/InfoModal.jsx';
import RecipeModal from '../../components/Modal/RecipeModal.jsx';

const Result = () => {
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
                <ResultModal onConfirmClick={()=>confirmEvent('result')}/>
                // <CreateRefModal onConfirmClick={()=>confirmEvent('createRef')} onCancelClick={()=>cancelEvent('createRef')}/>
                // <LoginModal onConfirmClick={()=>confirmEvent('login')} onCancelClick={()=>cancelEvent('login')}/>
                // <MessageModal onConfirmClick={()=>confirmEvent('message')} secret={true}/>
                // <InfoModal close={()=>cancelEvent('info')}/>
                // <RecipeModal close={()=>cancelEvent('recipe')}/>
            }
        </>
    );
};

export default Result;

