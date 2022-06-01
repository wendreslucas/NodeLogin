import React from 'react'
import { StyleLabel } from './style'

const Label = props => {
  return (
    <StyleLabel bottom={props.bottom} margin={props.margin}>
      {props.label}
    </StyleLabel>
  )
}

export default Label
