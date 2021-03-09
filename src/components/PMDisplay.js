import React from 'react';

import Message from './Message';

import { PMessagesDisplay } from './styling/style'

const PMDisplay = ( { PMessages, name } ) => {
  return(
    <PMessagesDisplay className='PMDisplay'>
      {PMessages.map((m,i) => {
        return(
          <div key={i}>
            <Message message={m} name={name} />
          </div>
        )
      })}
    </PMessagesDisplay>
  )
}

export default PMDisplay
