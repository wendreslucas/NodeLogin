import React from 'react'
import { StyleUser, StyleAncor } from './style'

const User = props => {
  return (
    <StyleAncor>
      <StyleUser>@{props.user}</StyleUser>
    </StyleAncor>
  )
}

export default User
