import profileReduser from "./profile-reduser";
import dialogsReduser from "./dilogs-reduser";
import siteBarReduser from "./siteBar-reduser";

let store = {
    _state:  {
        profilePage: {
            postsData: [
                {id: 0, message:"the best day of my life rree", likeCount:23},
                {id: 1, message:"winter day", likeCount:100},
                {id: 2, message:"something wrong", likeCount:2}
            ],
            newPostText: ""
        },
        messagesPage: {
            messages: [
                {id:1, message: 'Hi'},
                {id:2, message: 'Hererdff'},
                {id:3, message: 'Hellow'},
                {id:4, message: 'How are you'},
                {id:5, message: 'What are you doing'},
                {id:6, message: 'I am e'},
            ],
            dialogs: [
                {id:1, name: 'dimych'},
                {id:2, name: 'Wer'},
                {id:3, name: 'Mikl'},
                {id:4, name: 'Sveta'},
                {id:5, name: 'Oleg'},
                {id:6, name: 'Valera'},
            ],
            newMessage:"",
        },
        siteBarPage:{},
    },

    getState() {
        return this._state
    },
    _callSubscriber(){
        console.log("State changed")},

    subscriber(observe){
        this._callSubscriber = observe
    },
    dispatch(action) {

        profileReduser(this._state.profilePage, action)
        dialogsReduser(this._state.messagesPage, action)
        siteBarReduser(this._state.siteBarPage, action)
        this._callSubscriber(this.getState())
    }
}
export default store

window.store = store