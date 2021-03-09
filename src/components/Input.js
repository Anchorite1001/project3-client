import React from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

import { Textarea } from './styling/style'

const Input = (props) => {
  const { message, setMessage, sendMessage } = props;

  const {listen, listening, stop} = useSpeechRecognition({
    onResult: (result) => {
      let newMessage = message + ' ' + result;
      setMessage(newMessage);
    },
  });

  const toggle = listening
    ? stop
    : () => listen()

  return(
    <div className='messageInput'>
      <form className='messageTextForm'>
        <Textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button onClick={toggle}>{listening? 'Stop' : 'Listen'}</button>
        <button className='sendButton' type='submit' onClick={ (e) => sendMessage(e) }>Send</button>
      </form>
    </div>
  )
}

export default Input
