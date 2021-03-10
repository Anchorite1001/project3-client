import React, { useEffect } from 'react';

import Message from './Message';

import { PMessagesDisplay } from './styling/style'

const PMDisplay = ( { PMessages, name, setPReceiver } ) => {

  useEffect(() => {
    let scrollElement = document.getElementsByClassName('PMDisplay')[0];
    scrollElement.scrollTop = scrollElement.scrollHeight;
  })

  return(
    <PMessagesDisplay className='PMDisplay'>
      {PMessages.map((m,i) => {
        return(
          <div key={i}>
            <Message message={m} name={name} setPReceiver={setPReceiver} />
          </div>
        )
      })}
    </PMessagesDisplay>
  )
}

export default PMDisplay
