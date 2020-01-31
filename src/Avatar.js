import React from 'react';

function Avatar(props) {
  return(
    <div className="userImg">
      
      <img //src={require("./images/girl.jpg")} 
           src={props.avatar}
           alt=""
           className='userImg'
      />
    </div>
  )
}


export default Avatar;