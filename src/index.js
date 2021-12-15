import reportWebVitals from './reportWebVitals';
import state, {addMessage, addPost, changeMessage, changePost, subscriber} from "./redux/state";
import React from "react";
// import {renderEntireTree} from "./render";
import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";



export let renderEntireTree = (state, call) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    data={store.getState()} dispatch={store.dispatch.bind(store)}
                    addMessage={addMessage} changeMessage={changeMessage}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );

}

renderEntireTree(store.getState(), store.dispatch.bind(store));

store.subscriber(renderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
