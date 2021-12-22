const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
            postsData: [
                {id: 0, message:"the best day of my life rree", likeCount:23},
                {id: 1, message:"winter day", likeCount:100},
                {id: 2, message:"something wrong", likeCount:2}
            ],
            newPostText: ""
        }


let profileReduser = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let new_post = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            return {...state, newPostText:'' , postsData: [...state.postsData, new_post]}

        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.text}
        }
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