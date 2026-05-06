import React from 'react'
import { getMessages } from '../../services/projectServices'
import {useEffect, useState} from 'react'
import ProjectCard from '../../components/ProjectCard'
import MessageCard from '../../components/MessageCard'

const Messages = () => {

    const [messages, setMessages] = useState([])
    useEffect(() => {

        const fetch = async () => {
            try {

                const res = await getMessages()
                setMessages(res.data.contact)

                
            } catch (err) {
                console.log(err)
            }
        }

        fetch()
    } ,[])



    return(
        <>
        {messages.map((contact) => (

            <MessageCard key={contact._id} contact={contact} />

        ))}
        
        </>
    )
}

export default Messages