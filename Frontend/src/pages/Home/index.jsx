import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { StyleDiv, StyleImage, Imagem } from './style'

const Home = () => {
  useEffect(() => {
    document.title = 'One | Home'
  }, [])

  return (
    <>
      <Header />
      <StyleDiv>
        <StyleImage>
          <Imagem
            src="/postcode_logo.svg"
            alt=" Logo"
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
