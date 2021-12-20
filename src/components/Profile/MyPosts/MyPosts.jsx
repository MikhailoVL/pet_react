import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (posts) => {

    let postsData = posts.posts.map(p => {return <Post key={p.id} message={p.message} likeCount={p.likeCount} />});

    let onClickAddPost = () => {
        posts.addPost()
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        posts.changePost(text)
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
                    <button onClick={onClickAddPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsData}
            </div>
        </div>
    )
}

export default MyPosts