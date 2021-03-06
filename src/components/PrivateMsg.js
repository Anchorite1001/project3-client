import React from 'react';

import PMDisplay from './PMDisplay'
import PMInput from './PMInput'

import { PMwindow } from './styling/style'

const PrivateMsg = ({ PReceiver, setPReceiver, PMessage, setPMessage, PMessages, sendPrivate, name }) => {
  return (
    <PMwindow className='privateMsg window'>
      <div className = 'title-bar'>
        <div className='title-bar-text'>🍻PM: {name} & {PReceiver}</div>
        <div className='title-bar-controls'>
          <button aria-label='Close' />
        </div>
      </div>

      <div className='window-body'>
        <PMDisplay PMessages={PMessages} name={name} setPReceiver={setPReceiver}/>
        <PMInput PReceiver={PReceiver} PMessage={PMessage} setPMessage={setPMessage} sendPrivate={sendPrivate} />
      </div>
    </PMwindow>
  )
}

export default PrivateMsg
