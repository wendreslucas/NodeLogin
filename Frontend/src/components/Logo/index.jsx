import React from 'react'
import styled from 'styled-components'

const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`

const Logo = () => {
  return (
    <DivLogo>
      <img
        alt="logo da empresa"
        src="/artyou_logo_site_500.png"
        width={'100'}
        height={'100'}
      />
    </DivLogo>
  )
}

export default Logo
