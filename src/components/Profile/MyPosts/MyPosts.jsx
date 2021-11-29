import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            my post
            <div>
                <textarea></textarea>
            </div>
            <Post massage="33"/>
        </div>
    )
}

export default MyPosts