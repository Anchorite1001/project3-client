import React, { useState, useEffect, useRef } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import Peer from 'simple-peer';

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

  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);

  const SERVER = process.env.NODE_ENV;

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
        setPMessage('');
      })
    }
  }

  //hook for private video call
  const myVideo = useRef();
  const receiverVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({video:true, audio:true}).then((stream) => {
      setStream(stream);
      myVideo.current.srcObject = stream;
    });

    socket.on('callUser', ({ signal }) => {
      setReceivingCall(true);
      setCallerSignal(signal);
    });

  },[])

  const sendCall = (e) => {
    e.preventDefault();

    const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		});

    peer.on('signal', (data) => {
      socket.emit('sendCall', { name:PReceiver, room, signal:data });
    });

    peer.on('stream', (stream) => {
      receiverVideo.current.srcObject = stream
    });

    socket.on('callAccepted', ({ signal }) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  }

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		});

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal:data });
    });

    peer.on("stream", (stream) => {
			receiverVideo.current.srcObject = stream
		});

    peer.signal(callerSignal);
    connectionRef.current = peer
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  }

  return (
    <div className='chatOuterContainer'>
      <Body className='window'>
        <div className='chatHeader'>
          <ChatHeader room={room}/>
        </div>
        <div className='window-body'>
          <MessagesDisplay messages={messages} name={name} setPReceiver={setPReceiver}/>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </div>
      </Body>
      <RoomUsers users={users} setPReceiver={setPReceiver}/>
      <PrivateMsg PReceiver={PReceiver} setPReceiver={setPReceiver} PMessages={PMessages} name={name} PMessage={PMessage} setPMessage={setPMessage} sendPrivate={sendPrivate} />
    </div>
  )
}

export default Chat
