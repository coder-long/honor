import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import './index.css';

import thunk from 'redux-thunk';
import reducer from "./reducer/index";

const store = createStore(reducer, applyMiddleware(thunk))


//热更新实现
const render = Component => {
    ReactDOM.render(
        //绑定redux、热加载
        <Provider store={store}>
            {/* <AppContainer> */}
                <Component />
            {/* </AppContainer> */}
        </Provider>,
        document.getElementById('root'),
    )
}

render(App);
 