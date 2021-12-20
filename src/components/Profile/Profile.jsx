import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return(
        <div>
            <ProfileInfo/>
            <MyPostContainer store={props.store} />
            {/*<MyPosts postData={props.profilePage.postsData}*/}
            {/*         newPostText={props.profilePage.newPostText}*/}
            {/*         dispatch={props.dispatch}/>*/}
        </div>
    );
}

export default Profile