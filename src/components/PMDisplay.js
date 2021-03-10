import React from 'react';

import Message from './Message';

import { PMessagesDisplay } from './styling/style'

const PMDisplay = ( { PMessages, name, setPReceiver } ) => {
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
