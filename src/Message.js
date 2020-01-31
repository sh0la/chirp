import React from 'react';

function Message(props) {

  return (
    <div className='messageDisplay'>
      {props.comment}
    </div>
  )
   
}


export default Message;