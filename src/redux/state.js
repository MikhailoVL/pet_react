const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
let dialogsData = [
        {id:1, name: 'dimych'},
        {id:2, name: 'Wer'},
        {id:3, name: 'Mikl'},
        {id:4, name: 'Sveta'},
        {id:5, name: 'Oleg'},
        {id:6, name: 'Valera'},
    ];

let messageData = [
        {id:1, message: 'Hi'},
        {id:2, message: 'Hererdff'},
        {id:3, message: 'Hellow'},
        {id:4, message: 'How are you'},
        {id:5, message: 'What are you doing'},
        {id:6, message: 'I am e'},
    ];

let postsData = [
        {id: 0, message:"the best day of my life rree", likeCount:23},
        {id: 1, message:"winter day", likeCount:100},
        {id: 2, message:"something wrong", likeCount:2}
    ];



let renderEntireTree = () => {
    console.log('hi')
}

let store = {

    _state:  {
        profilePage: {
            postsData: postsData,
            newPostText: "mikl"
        },
        messagesPage: {
            messages: messageData,
            dialogs: dialogsData,
            newMessage:"enter you message",
        }
    },

    getState() {
        return this._state
    },

    _callSubscriber(){
        console.log("State changed")},

    addPost() {
        let new_post = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.postsData.push(new_post);
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this.getState(), this.addPost);
    },

    changePost(text) {
        debugger;
        this._state.profilePage.newPostText = text
        this._callSubscriber(this.getState(), this.addPost);
    },

    subscriber(observe){
        this._callSubscriber = observe
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this.addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            debugger;
            this.changePost(action.newText)
        }
    }

}




let state = {
    profilePage: {
        postsData: postsData,
        newPostText: "mikl"
    },
    messagesPage: {
        messages: messageData,
        dialogs: dialogsData,
        newMessage:"enter you message",
    }
}



export let addMessage = () => {
    let newMessage = {
        id:5,
        message: state.messagesPage.newMessage,
    };
    state.messagesPage.messages.push(newMessage)
    state.messagesPage.newMessage = ''
    renderEntireTree(state, store.addPost)
}

export let changeMessage = (text) => {
    state.messagesPage.newMessage = text
    renderEntireTree(state,store.addPost)
}


export const subscriber = (observe) =>{
    renderEntireTree = observe;
}
export const addPostActionCreator = () => ({type : ADD_POST})

export const updateNewPostActionCreator = (text) =>{
    return{
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

// export default state
export default store

window.store = store