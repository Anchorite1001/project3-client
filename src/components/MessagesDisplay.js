import React,{ useEffect } from 'react';

import Message from './Message'

import { Messages } from './styling/style'
import './styling/chat.css'

const MessagesDisplay = ({ messages, name, setPReceiver }) => {

  useEffect(() => {
    let scrollElement = document.getElementsByClassName('messagesDisplay')[0];
    scrollElement.scrollTop = scrollElement.scrollHeight;
  })

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
