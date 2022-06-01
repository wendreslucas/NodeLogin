import React, { useEffect } from 'react'
import Header from '../../components/Headers/Header'
import HeaderPost from '../../components/Headers/HeaderUser'
import { AddUser } from '../../components/AddUser'
import Footer from '../../components/Footer'
import { StyleMain } from './style'

const Main = () => {
  useEffect(() => {
    document.title = 'One | Create User'
  }, [])
  return (
    <>
      <Header />
      <StyleMain>
        <div className="DivMain">
          <div className="DivHeader">
            <HeaderPost size="723px" title="New User OneBlue" />
          </div>
          <AddUser />
        </div>
      </StyleMain>
      <Footer />
    </>
  )
}

export default Main
