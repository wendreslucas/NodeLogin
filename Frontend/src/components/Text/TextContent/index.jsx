import React from 'react'
import { StyleText, TextWrapper } from './style'

const Text = props => {
  return (
    <TextWrapper>
      <StyleText>{props.text}</StyleText>
    </TextWrapper>
  )
}

export default Text
