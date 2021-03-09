import React from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

import './styling/chat.css'
import { Textarea } from './styling/style'

const Input = (props) => {
  const { message, setMessage, sendMessage } = props;

  const {listen, listening, stop} = useSpeechRecognition({
    onResult: async (result) => {
      let newMessage = message + ' ' + result;
      await setMessage(newMessage);
    },
  });

  const toggle = listening
    ? stop
    : () => listen()

  return(
    <div className='messageInput'>
      <form className='messageTextForm'>
        <Textarea
          placeholder = 'Your message here...'
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <div className='inputButtons'>
          <button onClick={toggle} className='speechButton'>{listening? 'Stop' : 'Listen'}</button>
          <button className='sendButton' type='submit' onClick={ (e) => sendMessage(e) }>Send</button>
        </div>
      </form>
    </div>
  )
}

export default Input
