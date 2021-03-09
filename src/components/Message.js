import React from 'react';

import './styling/chat.css'

const Message = ({ message: { user, text },name }) => { //user:sender of message; name:current user
  let isSendByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();//see user controller in server
  if(user === trimmedName) {
    isSendByCurrentUser = true;
  }

  return(
    isSendByCurrentUser
      ? (
        <div className='messageContainer justifyEnd'>
          <p className='messageSenderOther'>{trimmedName}</p>
          <p className='messageText'>{text}</p>
        </div>
      )

      : (
        <div className='messageContainer justifyStart'>
          <p className='messageSenderMe'>{user}</p>
          <p className='messageText'>{text}</p>
        </div>
      )
  )
}

export default Message
