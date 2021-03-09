import React from 'react';

const PMInput = ( { PMessage, setPMessage, sendPrivate } ) => {
  return (
    <div className='PMInput'>
      <form className='PMTextForm'>
        <textarea
          placeholder='Your PM here...'
          value={ PMessage }
          onChange={(e) => {
            setPMessage(e.target.value)
          }}
        />
        <button className='PMButton' type='submit' onClick={(e) => sendPrivate(e) } >Send</button>
      </form>
    </div>
  )
}

export default PMInput
