import React from 'react';

import { SubBody, Userslist } from './styling/style'

const RoomUsers = ({ users, setprivateMsg, setPReceiver }) => {
  return(
      <SubBody className='roomUsersContainer window'>
        <div className='title-bar'>
          <div className='title-bar-text'>💬 People in the room</div>
        </div>

        <div className='window-body'>
          <Userslist className='usersList'>
            {users.map(({ name }) => (
              <li key={name} onClick={ (e) => setPReceiver(e.target.outerText) }>
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
