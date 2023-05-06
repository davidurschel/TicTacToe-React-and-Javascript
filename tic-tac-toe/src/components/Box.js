import React from 'react'

import "./Box.css"

export const Box = ({value, onClick, gameOver}) => {
    const style = value === "X" ? "box x" : "box o";
  return (
    <button className={`${style} ${gameOver && "gameOver"}`} onClick={onClick}>{value}</button>
  )
}
