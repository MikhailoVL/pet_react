import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import cDI from './DialogItem/DialogItem.module.css'
import cMI from "./Message/Message.module.css"

const Dialogs = (props) =>{
    // debugger;
    let dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElement = props.messagesPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    return(
        <div className={s.dialogs}>
            <div className={cDI.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={cMI.messages}>
                {messageElement}
            </div>
        </div>
    )
}
export default Dialogs