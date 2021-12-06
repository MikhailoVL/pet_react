import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
// import SiteBar from "../SiteBar/SiteBar";
import SiteBar from "./../SiteBar/SiteBar";
import t from "../SiteBar/SiteBar.module.css"
import Settings from "../Settings/Settings";

const Navbar = () => {
    return(
        <div>
            <nav className={s.nav + ' ' + s.wer}>
                <div className={s.item}>
                    <NavLink   className={({ isActive })=> isActive ? s.active : ""}
                               to='/profile'> Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={({ isActive })=> isActive ? s.active : ""}
                             to="/dialogs" >Message</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={({ isActive })=> isActive ? s.active : ""}
                             to='/news' >News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={({ isActive })=> isActive ? s.active : ""}
                             to='/music' >Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={({ isActive })=> isActive ? s.active : ""}
                             to='/settings' >Settings</NavLink>
                </div>

            </nav>
            <div>
                Friends
                <div className={t.siteBar}>

                    <SiteBar />
                    <SiteBar />
                    <SiteBar />
                </div>
            </div>
        </div>

    );
}

export default Navbar