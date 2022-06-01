import React, { useEffect } from 'react'
import Header from '../../components/Headers/Header'
import Footer from '../../components/Footer'
import { StyleDiv, StyleImage, Imagem } from './style'

const Home = () => {
  useEffect(() => {
    document.title = 'OneBlue | Home'
  }, [])

  return (
    <>
      <Header />
      <StyleDiv>
        <StyleImage>
          <Imagem
            src="/artyou_logo_site_500.png"
            alt="OneBlue Logo"
            width="500"
            height="500"
          />
        </StyleImage>
      </StyleDiv>
      <Footer />
    </>
  )
}

export default Home
