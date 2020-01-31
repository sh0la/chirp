import React from 'react';

function UserName(props) {
  console.log(props)
  return(
    <p className="userName">{props.username}</p>
  )
}


export default UserName;