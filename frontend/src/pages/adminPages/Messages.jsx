// import React from 'react'
// import { getMessages } from '../../services/projectServices'
// import {useEffect, useState} from 'react'
// import ProjectCard from '../../components/ProjectCard'
// import MessageCard from '../../components/MessageCard'

// const Messages = () => {

//     const [messages, setMessages] = useState([])
//     useEffect(() => {

//         const fetch = async () => {
//             try {

//                 const res = await getMessages()
//                 setMessages(res.data.contact)

                
//             } catch (err) {
//                 console.log(err)
//             }
//         }

//         fetch()
//     } ,[])



//     return(
//         <>
//         {messages.map((contact) => (

//             <MessageCard key={contact._id} contact={contact} />

//         ))}
        
//         </>
//     )
// }

// export default Messages


import React, { useEffect, useState } from 'react'
import { getMessages } from '../../services/projectServices'
import MessageCard from '../../components/MessageCard'
import '../../css/adminCss/message.css'

const Messages = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await getMessages()
                setMessages(res.data.contact)
            } catch (err) {
                console.log(err)
            }
        }

        fetchMessages()
    }, [])

    return (
        <div className="messages-page">
            <div className="messages-container">
                <h1 className="messages-title">View Messages</h1>
                <p className="messages-subtitle">
                    Here are the messages received from the contact form.
                </p>

                <div className="messages-list">
                    {messages.length > 0 ? (
                        messages.map((contact) => (
                            <MessageCard key={contact._id} contact={contact} />
                        ))
                    ) : (
                        <p className="messages-empty">No messages found.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Messages