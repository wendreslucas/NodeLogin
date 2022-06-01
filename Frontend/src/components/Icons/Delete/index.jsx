import React from 'react'
import { Button } from './style'

function Delete(props) {
  const { disabled, onClick } = props
  return (
    <Button disabled={disabled} onClick={onClick}>
      <img src="/delete.svg" alt="delete" />
    </Button>
  )
}

export default Delete
