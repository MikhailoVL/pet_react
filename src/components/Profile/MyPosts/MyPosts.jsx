import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (posts) => {


    let postsData = posts.postData.map(p => {return <Post key={p.id} message={p.message} likeCount={p.likeCount} />})

    return(
        <div className={s.postsBlock}>
            My post
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
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