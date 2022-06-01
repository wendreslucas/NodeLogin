import React from 'react'
import { StyleSubtitle } from './style.js'

function Subtitle(props) {
  const { subtitle, margin } = props

  return <StyleSubtitle margin={margin}>{subtitle}</StyleSubtitle>
}

export default Subtitle
