const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let profileReduser = (state, action) => {
    switch (action.type) {

        case ADD_POST:
            let new_post = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            state.postsData.push(new_post);
            state.newPostText = "";
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type : ADD_POST})

export const updateNewPostActionCreator = (text) =>{
    return{
        type: UPDATE_NEW_POST_TEXT, text: text
    }
}

export default profileReduser;