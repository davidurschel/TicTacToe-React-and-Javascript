import React from 'react'

import {Box} from "./Box"
import "./Board.css"

export const Board = ({board, onClick, gameOver}) => {
  return (
    <div className={`board `}>
        {board.map((value, idx) => {
            return <Box gameOver={gameOver} value={value} onClick={() => value === null && onClick(idx)} />
        })}
        </div>
  )
}
