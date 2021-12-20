import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";

const MyPostsContainer = (posts) => {

    let state = posts.store.getState()

    let onClickAddPost = () => {
        posts.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        posts.store.dispatch(updateNewPostActionCreator(text))
    }

    return <MyPosts addPost={onClickAddPost}
                    posts={state.profilePage.postsData}
                    changePost={onPostChange}
                    newPostText={state.profilePage.newPostText}/>
}

export default MyPostsContainer