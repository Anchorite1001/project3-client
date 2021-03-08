import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'

import ChatHeader from './ChatHeader';
import MessagesDisplay from './MessagesDisplay';
import Input from './Input'
import RoomUsers from './RoomUsers'

import { Body } from './styling/style'
import './styling/chat.css'

let socket; //global variable

const Chat = ({location}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const SERVER = 'localhost:5000'

  useEffect(() => { //hook for user joining and leaving the room
    const data = queryString.parse(location.search); //get back the variables in url
    const {name, room} = data //destructuring

    setName(name);
    setRoom(room);

    socket = io(SERVER);
    socket.emit('join', { name, room }, (error)=>{
      console.log(error);
    }); //{name, room} === {name:name, room:room}

  }, [SERVER, location.search]); //useEffect would only be re-rendered when two variables in array change.

  useEffect(() => { //hook for messages and room users handling
    socket.on('message', (message) => {
      setMessages([...messages, message]); //push new message to messages array
    });

    socket.on('roomUsers', ({ users }) => {
      setUsers(users);
    });
  }, [messages])

  const sendMessage = (e) => {
    e.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => {
        setMessage('');
      })
    }
  };

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
      <RoomUsers users={users}/>
    </div>
  )
}

export default Chat
