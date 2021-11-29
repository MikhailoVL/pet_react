import s from './Navbar.module.css'

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <a href='/profile' >Profile</a>
            </div>
            <div>
                <a href='/dialogs' >Message</a>
            </div>
            <div>
                <a href='/news' >News</a>
            </div>
            <div>
                <a href='/music' >Music</a>
            </div>
            <div>
                <a href='settings' >Settings</a>
            </div>
        </nav>
    );
}

export default Navbar