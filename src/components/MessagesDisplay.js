import React from 'react';

import Message from './Message'

import './styling/chat.css'
import { Messages } from './styling/style'

const MessagesDisplay = ({ messages, name, setPReceiver }) => {
  return(
    <Messages className='messagesDisplay'>
      {messages.map((m,i) => {
        return(
          <div key={i}>
            <Message message={m} name={name} setPReceiver={setPReceiver}/>
          </div>
        )
      })}
    </Messages>
  )
}

export default MessagesDisplay
