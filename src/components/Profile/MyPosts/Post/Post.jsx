import s from './Posts.module.css'

const Post = (xxx) => {
    return(
        <div>
            <div className={s.item}>
                <img src='https://cdn-irec.r-99.com/sites/default/files/imagecache/250i/pictures/10/picture-101988-IrvVzs20.jpg' />
                {xxx.message}

            </div>
            <div className={s.like}>
                like : {xxx.likeCount}
            </div>

        </div>

    )
}
export default Post