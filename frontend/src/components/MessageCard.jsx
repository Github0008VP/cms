import React from 'react'

const MessageCard = ({contact}) => {
  return (
    <>

    <h3>{contact.name}</h3>
    <p>{contact.message}</p>


    
    </>
  )
}

export default MessageCard