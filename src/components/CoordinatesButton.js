// Code CoordinatesButton Component Here
import React from 'react';

const CoordinatesButton = (prop) => {
  const {onReceiveCoordinates} = prop
  const handleClick = (e) => {
    // console.log("x: ",e.clientX," y: ", e.clientY)
    onReceiveCoordinates([e.clientX,e.clientY])
  }
  return(
    <button onClick={handleClick}>button</button>
  )
}

export default CoordinatesButton