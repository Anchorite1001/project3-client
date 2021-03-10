import React from 'react';

import { PMessageInput } from './styling/style';
import './styling/chat.css'

const PMInput = ( { PReceiver, PMessage, setPMessage, sendPrivate } ) => {
  return (
    <div className='PMInput'>
      <form className='PMTextForm'>
        <PMessageInput
          placeholder={PReceiver ? `Send PM to ${PReceiver}` : 'Click a user to send them PM'}
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
