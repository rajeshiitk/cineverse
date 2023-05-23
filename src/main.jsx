import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { Provider } from 'react-redux';
import {store} from "./store/store.js"

// react copies testing 
// import window from  'react';
// import 'react-dom'
// console.log(window.React1 === window.React2);

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store} >
    <App />
 </Provider>
)
