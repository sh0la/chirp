import React from 'react';

function UserName(props) {
  console.log(props)
  return(
    <div className="userName">
      {props.username}
    </div>
  )
}


export default UserName;