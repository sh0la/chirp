import React from 'react';



function Time(props) {
  console.log(props)
  let newDate = JSON.stringify(props.update)
  newDate =  newDate.substr(12,[5])

  return(
    <span className='date'>
      {newDate}
    </span>
  )
}


export default Time;