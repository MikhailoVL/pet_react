import {connect} from "react-redux";
import {changeFollowStatusActionCreator, setUsersActionCreator} from "../../redux/user-redux";
import Users from "./Users"


let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        followUnfollow: (userId) => {
            dispatch(changeFollowStatusActionCreator(userId));
        },
        setUsers:(users)=>{
            dispatch(setUsersActionCreator(users));
        }
    }
}


const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer

