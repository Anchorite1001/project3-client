import React from 'react';
import ReactEmoji from 'react-emoji';

import './styling/chat.css'

const Message = ({ message: { user, time, text }, name, setPReceiver }) => { //user:sender of message; name:current user
  let isSendByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();//see user controller in server
  if(user === trimmedName) {
    isSendByCurrentUser = true;
  }

  return(
    isSendByCurrentUser
      ? (
        <div className='messageContainer justifyEnd'>
          <p className='messageSenderOther'>{name}</p>
          <p className='messageTime'>{time}</p>
          <p className='messageText'>{ ReactEmoji.emojify(text) }</p>
        </div>
      )

      : (
        <div className='messageContainer justifyStart'>
          <p className='messageSenderMe' onClick={ (e) => setPReceiver(user) }>{user}</p>
          <p className='messageTime'>{time}</p>
          <p className='messageText'>{ ReactEmoji.emojify(text) }</p>
        </div>
      )
  )
}

export default Message
