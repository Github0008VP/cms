import React from 'react'
import '../css/adminCss/message.css'


const MessageCard = ({contact}) => {

return (
        <div className="message-card">
            <div className="message-user">{contact.name}</div>
            <div className="message-text">{contact.message}</div>
        </div>
    )


   
}

export default MessageCard