import React from 'react';

import { PMessageInput } from './styling/style';
import './styling/chat.css'

const PMInput = ( { PReceiver, PMessage, setPMessage, sendPrivate, sendCall } ) => {
  const PMprompts = [
    'How will you depict homesick with words?',
    'What is the last time you feel you no longer belong somewhere?',
    'Have you ever felt someone you love so annoying that you wanna silent them?',
    'Do you consider yourself "cultured"?',
    'How do you feel about discussing politics?',
    'What is the last time you read something that resonates your subtle and unspeakable feelings?',
    'What would be a better version of you?'
  ]

  const PMrandom = (e) => {
    e.preventDefault()
    const PMprompt = PMprompts[Math.floor(Math.random() * (PMprompts.length))];
    setPMessage(PMprompt);
  }

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
          <button onClick={ (e) => PMrandom(e) } className='videoButton'>Random 🎠</button>
          <button type='submit' onClick={(e) => sendPrivate(e) } >Send 🌐</button>
        </div>
      </form>
    </div>
  )
}

export default PMInput
