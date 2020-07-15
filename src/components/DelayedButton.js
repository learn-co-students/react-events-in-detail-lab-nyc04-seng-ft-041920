// Code DelayedButton Component Here
import React from 'react';

const DelayedButton = (prop) => {
  const {onDelayedClick, delay} = prop
  
  const handleClick = (e) => {
    // console.log(e)
    //console.log(onDelayedClick, delay)
    e.persist()
    setTimeout(()=>{onDelayedClick(e)},delay)
  }
  return(
    <button onClick={handleClick}>Delayed Button</button>
  )
}

export default DelayedButton