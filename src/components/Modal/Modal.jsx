import React, {useEffect} from 'react';
import * as styled from './styles.jsx';

const Modal = ({children, close}) => {
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

    return (
        <styled.Background>
            <styled.ModalContainer close={close}>
                {close && <styled.CloseImg onClick={close}/>}
                {children}
            </styled.ModalContainer>
        </styled.Background>
    );
};

export default Modal;
