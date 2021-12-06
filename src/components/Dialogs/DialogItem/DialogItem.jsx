import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{

    // let dialogsElement = dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let path = props.id.toString()
    return(
            <div className={s.dialog + ' ' + s.active}>
                <img src='https://cdn-irec.r-99.com/sites/default/files/imagecache/250i/pictures/10/picture-101988-IrvVzs20.jpg' />
                 <NavLink to={path} className={({isActive}) => isActive ? s.active: ""}> {props.name} </NavLink>
            </div>
    )
}
export default DialogItem