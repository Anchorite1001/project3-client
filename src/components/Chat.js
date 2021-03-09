import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'

import ChatHeader from './ChatHeader';
import MessagesDisplay from './MessagesDisplay';
import Input from './Input'
import RoomUsers from './RoomUsers'
import PrivateMsg from './PrivateMsg'

import { Body } from './styling/style'
import './styling/chat.css'

let socket; //global variable

const Chat = ({location}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const [users, setUsers] = useState([]);
  const [PReceiver, setPReceiver] = useState('');
  const [PMessage, setPMessage] = useState('');
  const [PMessages, setPMessages] = useState([]);

  const SERVER = 'https://retro-chat-123.herokuapp.com/'

  //hook for user joining
  useEffect(() => {
    const data = queryString.parse(location.search); //get back the variables in url
    const {name, room} = data //destructuring

    setName(name);
    setRoom(room);

    socket = io(SERVER, {
      withCredentials: true,
      extraHeaders: {
        'my-custom-header' : 'abcd'
      }
    });

    socket.emit('join', { name, room }, (error)=>{
      console.log(error);
    }); //{name, room} === {name:name, room:room}

  }, [SERVER, location.search]); //useEffect would only be re-rendered when two variables in array change.

  //hook for handling messages and users of room (subwindow)
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]); //push new message to messages array
    });

    socket.on('roomUsers', ({ users }) => {
      setUsers(users);
    });
  }, [messages]) //why messages????

  const sendMessage = (e) => {
    e.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => {
        setMessage('');
      })
    }
  };

  //hook for private messages
  useEffect(() => {
    socket.on('private', (PMessage) => {
      setPMessages([...PMessages, PMessage]);
    });

    socket.on('roomUsers', ({ users }) => {
      setUsers(users);
    });
  }, [PMessages]);

  const sendPrivate = (e) => {
    e.preventDefault();

    if(PReceiver && PMessage) {
      socket.emit('sendPrivate', { name:PReceiver, room }, PMessage, () => {
        setPReceiver('');
        setPMessage('');
      })
    }
  }

  return (
    <div className='chatOuterContainer'>
      <Body className='window'>
        <div className='chatHeader'>
          <ChatHeader room={room}/>
        </div>
        <div className='window-body'>
          <MessagesDisplay messages={messages} name={name}/>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </div>
      </Body>
      <RoomUsers users={users} setPReceiver={setPReceiver}/>
      <PrivateMsg PReceiver={PReceiver} PMessages={PMessages} name={name} PMessage={PMessage} setPMessage={setPMessage} sendPrivate={sendPrivate} />
    </div>
  )
}

export default Chat
