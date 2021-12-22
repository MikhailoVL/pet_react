import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";
import Store from "../../../redux/store";
import {connect} from "react-redux";

// const MyPostsContainer = (posts) => {
//
//
//     let state = posts.store.getState()
//
//     let onClickAddPost = () => {
//         posts.store.dispatch(addPostActionCreator())
//     }
//
//     let onPostChange = (text) => {
//         posts.store.dispatch(updateNewPostActionCreator(text))
//     }
//
//     return <MyPosts addPost={onClickAddPost}
//                     posts={state.profilePage.postsData}
//                     changePost={onPostChange}
//                     newPostText={state.profilePage.newPostText}/>
// }

let mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        changePost: (text) => {
            dispatch(updateNewPostActionCreator(text))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default PostsContainer