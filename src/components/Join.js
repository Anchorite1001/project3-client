import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className = 'joinContainer window'>
      <div className = 'title-bar'>
        <div className='title-bar-text'>Join</div>
        <div className='title-bar-controls'>
          <button aria-label='Close' />
        </div>
      </div>

      <div className='window-body'>
        <div className='field-row-stacked'>
          <label>Name</label>
          <input className='joinInput' type='text' onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className='field-row-stacked'>
          <label>Room</label>
          <input className='joinInput' type='text' onChange={(e) => setRoom(e.target.value)}/>
        </div>

        <Link
          onClick={(e) => (!name || !room)? e.preventDefault():null}
          to={`/chat?name=${name}&room=${room}`}
        >
        { /* if no name or room is submitted then prevent the link to function, otherwise onclick would do nothing and let to chat part. */ }
          <button className = 'button' type = 'submit'>Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default Join
