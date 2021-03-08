import React from 'react';

const ChatHeader = (props) => {
  return(
    <div className='chatHeader title-bar'>
      <div className='title-bar-text'>
        {props.room}
      </div>
      <div className='title-bar-controls'>
        <a href='/'><button aria-label='Close'/></a>
      </div>
    </div>
  )
};

export default ChatHeader
