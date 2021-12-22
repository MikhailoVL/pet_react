import React from "react";

let Users = (props) => {


    let changeFollowed = (userId) =>{
        debugger
        props.followUnfollow(userId)
    }
    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.imgUrl}/>
                    </div>
                    <div>
                        <button onClick={() =>changeFollowed(u.id)}>{`${u.followed ? "Unfollow": "Follow"}`}</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users