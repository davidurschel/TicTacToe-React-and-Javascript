import React from 'react'

import "./ResetButton.css"

export const ResetButton = ({reset , value}) => {
  return (
    <button className="reset-button" onClick={reset}>Reset {value}</button>
  )
}
