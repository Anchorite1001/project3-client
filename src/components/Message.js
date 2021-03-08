import React from 'react';

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
          <p className='messageSender'>{trimmedName}</p>
          <div>
            <p className='messageText'>{text}</p>
          </div>
        </div>
      )

      : (
        <div className='messageContainer justifyStart'>
          <p className='messageSender'>{user}</p>
          <div>
            <p className='messageText'>{text}</p>
          </div>
        </div>
      )
  )
}

export default Message
