import React from 'react'

import "./Score.css"

export const Score = ({scores, xTurn}) => {
    const {xScore, oScore} = scores;
  return (
    <div className="scoreboard">
        <span className={`score x-score ${!xTurn && "inactive"}`}>X - {xScore}</span>
        <span className={`score o-score ${xTurn && "inactive"}`}>O - {oScore}</span>
    </div>
  )
}
