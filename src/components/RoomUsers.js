import React from 'react';

import { SubBody, Userslist } from './styling/style'

const RoomUsers = ({ users }) => {
  return(
    <SubBody className='roomUsersContainer window'>
      <div className='title-bar'>
        <div className='title-bar-text'>Currently chatting here</div>
      </div>

      <div className='window-body'>
        <Userslist className='usersList'>
          {users.map(({ name }) => (
            <li key={name}>
              {name}
              <hr />
            </li>
          ))}
        </Userslist>
      </div>
    </SubBody>
  )
}

export default RoomUsers
