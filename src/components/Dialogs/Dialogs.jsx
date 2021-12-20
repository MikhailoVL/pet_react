import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import cDI from './DialogItem/DialogItem.module.css'
import cMI from "./Message/Message.module.css"
import React from "react";


const Dialogs = (props) =>{

    let dialogsElement = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElement = props.messages.map(m => <Message key={m.id} message={m.message}/>)

    let addMessage = () =>{
        props.addMessage()
    }

    let onMessageChange = (e) =>{
        let text = e.target.value;
        props.changeMessage(text)
    }

    return(
        <div className={s.dialogs}>
            <div className={cDI.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={cMI.messages}>
                {messageElement}
                <textarea value={props.newMessage} onChange={onMessageChange} placeholder={'Enter your message'}></textarea>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    )
}

export default Dialogs