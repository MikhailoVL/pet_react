import s from './SiteBar.module.css'
import {NavLink} from "react-router-dom";

const SiteBar = () =>{
    return (
            <div className={ s.item}>

                <div>
                    <img src='https://cdn-irec.r-99.com/sites/default/files/imagecache/250i/pictures/10/picture-101988-IrvVzs20.jpg' />
                </div>
                <NavLink to="#s" className={({isActive}) => isActive ? s.active: ""}> Name </NavLink>
            </div>


    )
}

export default SiteBar