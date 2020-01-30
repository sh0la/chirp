import React from 'react';

function Avatar(props) {
  return(
    <div className="userImg">
      <span>Submitted by</span>
      <img //src={require("./images/girl.jpg")} 
           src={props.avatarUrl}
           alt=""/>
    </div>
  )
}


export default Avatar;