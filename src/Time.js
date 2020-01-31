import React from 'react';



function Time(props) {
  console.log(props)
  const newDate = JSON.stringify(props.update)
  return(
    <span id='date'>
      {newDate}
    </span>
  )
}


export default Time;