import React from 'react';

function Emoji(props) {
  console.log(props.emojis)
  const emojigroup = props.emojis.map(emoji => {
    return(emoji + '   ')
  })

  return (
    <React.Fragment>
     {emojigroup}
    </React.Fragment>
  )
   
}


export default Emoji