import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message'

const MessagesDisplay = ({ messages, name }) => {
  return(
    <ScrollToBottom className='messages'>
      {messages.map((m,i) => {
        return(
          <div key={i}>
            <Message message={m} name={name}/>
          </div>
        )
      })}
    </ScrollToBottom>
  )
}

export default MessagesDisplay
