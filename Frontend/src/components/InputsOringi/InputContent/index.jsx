import React from 'react'
import { StyleTextArea } from './style'

function TextArea(props) {
  const { placeholder, onChange, name, size, value } = props
  return (
    <StyleTextArea
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      value={value}
    />
  )
}

export default TextArea
