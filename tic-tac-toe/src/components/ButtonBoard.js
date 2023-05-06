import React from 'react'

import {ResetButton} from "./ResetButton";
import "./ButtonBoard.css"

export const ButtonBoard = ({resetBoard, resetScore}) => {
  return (
    <div className="ButtonBoard">
        <ResetButton reset={resetBoard} value="Board"/>
        <ResetButton reset={resetScore} value="Score"/>
    </div>

  )
}
