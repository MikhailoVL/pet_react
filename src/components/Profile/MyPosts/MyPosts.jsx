import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";

const MyPosts = (posts) => {

    let postsData = posts.postData.map(p => {return <Post key={p.id} message={p.message} likeCount={p.likeCount} />});

    let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        posts.dispatch(addPostActionCreator())
        // posts.addPost()
        // posts.changePost('')
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // posts.changePost(text)
        posts.dispatch(updateNewPostActionCreator(text))
    }


    return(
        <div className={s.postsBlock}>
            My post
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={posts.newPostText}>enter you post</textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsData}
                {/*<Post massage="33"/>*/}
            </div>

        </div>
    )
}

export default MyPosts