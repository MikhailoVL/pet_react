import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import cDI from './DialogItem/DialogItem.module.css'
import cMI from "./Message/Message.module.css"
import React from "react";

const Dialogs = (props) =>{
    // debugger;
    let dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElement = props.messagesPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    let newMessage = React.createRef()

    let addMessage = () =>{
        let text = newMessage.current.value;
        props.addMessage()
        // alert(text)
    }

    let onMessageChange = () =>{
        let text = newMessage.current.value;
        props.changeMessage(text)
    }

    return(
        <div className={s.dialogs}>
            <div className={cDI.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={cMI.messages}>
                {messageElement}
                <textarea ref={newMessage} onChange={onMessageChange} value={props.messagesPage.newMessage}></textarea>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    )
}
export default Dialogs