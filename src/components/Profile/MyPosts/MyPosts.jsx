import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reduser";

const MyPosts = (posts) => {

    let postsData = posts.postData.map(p => {return <Post key={p.id} message={p.message} likeCount={p.likeCount} />});

    let addPost = () => {
        posts.dispatch(addPostActionCreator())
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        posts.dispatch(updateNewPostActionCreator(text))
    }

    return(
        <div className={s.postsBlock}>
            My post
            <div>
                <div>
                    <textarea
                        value={posts.newPostText}
                        onChange={onPostChange}
                        placeholder={'enter post'}>
                    </textarea>
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsData}
            </div>
        </div>
    )
}

export default MyPosts