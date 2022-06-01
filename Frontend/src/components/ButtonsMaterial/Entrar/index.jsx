import React from 'react'
import Button from '@mui/material/Button'
import styled from 'styled-components'

const DivBtnEntrar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 130px;
`
const ButtonGeneric = props => {
  const { text, onClick, variant } = props

  return (
    <DivBtnEntrar>
      <Button text={text} onClick={onClick} variant={variant} />
    </DivBtnEntrar>
  )
}

export default ButtonGeneric
