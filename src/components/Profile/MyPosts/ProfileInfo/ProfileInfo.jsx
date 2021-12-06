import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return(

        <div>
            <div>
                <img src='https://tlum.ru/uploads/80bc986bbd6ade2a8efbbf968299bd2861fa6c4f4c6d75b9691d04c42f90625b.jpeg'/>
            </div>

            <div className={s.info}>
                <div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZU9b8oKesIgNFYNbXoIXP1VzmP5rvS-v6Q&usqp=CAU'/>
                </div>
                <div className={s.descriptionBlock}>
                    description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo