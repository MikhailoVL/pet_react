import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dilogs-reduser";
import siteBarReduser from "./siteBar-reduser";
import userReduser from "./user-redux";

let reducers = combineReducers({
        profilePage: profileReduser,
        messagesPage: dialogsReduser,
        siteBarPage: siteBarReduser,
        usersPage: userReduser
    });

let store = createStore(reducers);


export default store;