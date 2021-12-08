import ReactDOM from "react-dom";
import React from "react";
import './index.css'
import App from "./App";
import {addPost, changePost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export let renderEntireTree = (state, call) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App data={state} addPost={addPost} changePost={changePost}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );

}


