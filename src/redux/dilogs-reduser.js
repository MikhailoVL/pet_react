const SEND_MESSAGE_BODY = 'SEND_MESSAGE_BODY';
const ADD_MESSAGE_BODY = 'ADD_MESSAGE_BODY';

let initialState = {

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
            newMessage:""
        }


let dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_BODY:
            let newMessage = {
                id:5,
                message: state.newMessage,
            };
            state.messages.push(newMessage);
            state.newMessage = '';
            return state;

        case SEND_MESSAGE_BODY:
            state.newMessage = action.text;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type : ADD_MESSAGE_BODY})
export const updateMessageActionCreator = (text) => {
    return {type: SEND_MESSAGE_BODY, text: text}
}

export default dialogsReduser;