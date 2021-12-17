const SEND_MESSAGE_BODY = 'SEND_MESSAGE_BODY';
const ADD_MESSAGE_BODY = 'ADD_MESSAGE_BODY';

let dialogsReduser = (state, action) => {
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