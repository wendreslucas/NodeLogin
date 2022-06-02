import React from 'react'
import styled from 'styled-components'

const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
`

const Logo = props => {
  const { width, height } = props
  return (
    <DivLogo>
      <img
        alt="logo da empresa"
        src="/postcode_logo_azul.svg"
        width={width}
        height={height}
      />
    </DivLogo>
  )
}

export default Logo
