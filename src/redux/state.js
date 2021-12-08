import {renderEntireTree} from "../render";


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

let state = {
    profilePage: {
        postsData: postsData,
        newPostText: "mikl"
    },
    messagesPage: {
        messages: messageData,
        dialogs: dialogsData,
    }
}

export let addPost = () =>{
    let new_post = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.postsData.push(new_post);
    state.profilePage.newPostText = ""
    renderEntireTree(state, addPost);
}

export let changePost = (text) =>{
    state.profilePage.newPostText = text
    renderEntireTree(state, addPost);
}

export default state