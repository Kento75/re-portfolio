import React from 'react'
import classes from "./CircleFrame.css";

const CircleFrame = ({ imagePath, altName, flameSize }) => {
  return (
    <div className={ classes.circleFrame }>
      <img src={imagePath} alt={altName} size={`${flameSize}px`} />
    </div>
  )
}

export default CircleFrame;
