import React from 'react';

import { SubBody } from './styling/style'

const RoomUsers = ({ users }) => {
  return(
    <SubBody className='roomUsersContainer window'>
      <div className='title-bar'>
        <div className='title-bar-text'>People currently chatting here</div>
      </div>

      <div className='window-body'>
        <ul className='usersList'>
          {users.map(({ name }) => (
            <li key={name}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </SubBody>
  )
}

export default RoomUsers
