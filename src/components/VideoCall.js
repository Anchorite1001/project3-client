import React from 'react';

const VideoCall = ({ user, PReceiver, myVideo, receiverVideo, stream, receivingCall, callAccepted, callEnded, answerCall, leaveCall }) => {
  return (
    <div className='videoCall window'>
      <div className='videoHeader title-bar'>
        <div className='title-bar-text'>VideoCall: { user }&{ PReceiver }</div>
      </div>
      { receivingCall && !callAccepted
        ? (
          <div className='receiveCall window-body'>
            <p>You get a call</p>
            <button onClick={ answerCall }>Answer</button>
          </div>
        )
        : (<div className='videoWindow window-body'>
          <div className='videoShow'>
            <label>{ user }</label>
            { stream && <video playsInline ref={ myVideo } autoPlay />}
          </div>
          <div className='videoShow'>
            <label>{ PReceiver }</label>
            { callAccepted && !callEnded ?
              <video playsInline ref={ receiverVideo } autoPlay />
            : null }
          </div>
          <button onClick={ leaveCall }>Leave Call</button>
        </div>)
      }
    </div>
  )
}

export default VideoCall
