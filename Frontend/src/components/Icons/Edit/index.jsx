import React from 'react'
import { Button } from './style'

function Edit(props) {
  const { disabled, onClick } = props
  return (
    <Button disabled={disabled} onClick={onClick}>
      <img src="/edit.svg" alt="edit" />
    </Button>
  )
}

export default Edit
