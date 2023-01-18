import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './static/GlobalStyles'
import {RecoilRoot} from 'recoil';

ReactDOM.createRoot(document.getElementById('root')).render(
    <RecoilRoot>
        <GlobalStyle/>
        <App/>
    </RecoilRoot>
)
