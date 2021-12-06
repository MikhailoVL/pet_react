import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    // debugger;
    return(
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    );
}

export default Profile