import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dilogs-reduser";
import siteBarReduser from "./siteBar-reduser";

let reducers = combineReducers({
        profilePage: profileReduser,
        messagesPage: dialogsReduser,
        siteBarPage: siteBarReduser
    });

let store = createStore(reducers);


export default store;