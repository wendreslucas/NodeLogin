import React from 'react'
import { StyleButton } from './style'

function Button(props) {
  const { text, disabled, marginBottom, marginTop, size, onClick } = props
  return (
    <StyleButton
      disabled={disabled}
      margin-bottom={marginBottom}
      margin-top={marginTop}
      size={size}
      onClick={onClick}
    >
      {text}
    </StyleButton>
  )
}

export default Button
