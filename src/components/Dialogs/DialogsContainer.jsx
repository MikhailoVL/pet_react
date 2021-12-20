import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dilogs-reduser";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) =>{

    let state = props.store.getState()

    let onClickAddMassages = () =>{
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (text) =>{
        props.store.dispatch(updateMessageActionCreator(text))
    }

    return <Dialogs dialogs={state.messagesPage.dialogs}
                    messages={state.messagesPage.messages}
                    addMessage={onClickAddMassages}
                    changeMessage={onMessageChange}
                    newMessage={state.messagesPage.newMessage}/>
}

export default DialogsContainer