import React from 'react';

import { PMessageInput } from './styling/style';
import './styling/chat.css'

const PMInput = ( { PMessage, setPMessage, sendPrivate } ) => {
  return (
    <div className='PMInput'>
      <form className='PMTextForm'>
        <PMessageInput
          placeholder='Your PM here...'
          value={ PMessage }
          onChange={(e) => {
            setPMessage(e.target.value)
          }}
        />
        <div className='PMButton'>
          <button className='videoButton'>Video Chat</button>
          <button type='submit' onClick={(e) => sendPrivate(e) } >Send</button>
        </div>
      </form>
    </div>
  )
}

export default PMInput
