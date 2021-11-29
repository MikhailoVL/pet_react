import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
          <div>
              <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM57RyNO5xHejFw7IBohB6m5A3NvWkcRnjwg&usqp=CAU'/>
              </div>

              <div>
                  ava + description
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZU9b8oKesIgNFYNbXoIXP1VzmP5rvS-v6Q&usqp=CAU'/>
              </div>

            <MyPosts />

          </div>
    );
}

export default Profile