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

  const toggle = (e) => {
    e.preventDefault();
    if(listening) {
      stop()
    } else {
      listen()
    }
  }

  const Mprompts = [
    'Do you have existential crisis?',
    'What is the last time you feel you no longer belong?',
    'What is your favourite poem?',
    'Can you describe what you see out of your window?',
    'What are the other tabs openning in your browser?',
  ]

  const random = (e) => {
    e.preventDefault();
    const Mprompt = Mprompts[Math.floor(Math.random() * (Mprompts.length))]
    setMessage(Mprompt);
  }

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
          <button onClick={(e) => random(e)} className='mRandomButton'>Random 🌀</button>
          <button onClick={(e) => toggle(e)} className='speechButton'>{listening? 'Stop✋' : 'Listen🎙'}</button>
          <button className='sendButton' type='submit' onClick={ (e) => sendMessage(e) }>Send 🌐</button>
        </div>
      </form>
    </div>
  )
}

export default Input
