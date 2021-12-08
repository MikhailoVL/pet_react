import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return(
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     changePost={props.changePost}/>
        </div>
    );
}

export default Profile