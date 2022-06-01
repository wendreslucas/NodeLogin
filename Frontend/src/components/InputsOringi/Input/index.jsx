import React from 'react'
import { InputWrapper } from './style'

function Input(props) {
  const { autoFocus, size, placeholder, name, onChange, type, value } = props
  return (
    <InputWrapper
      autoFocus={autoFocus}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      type={type}
      value={value}
    />
  )
}

export default Input
