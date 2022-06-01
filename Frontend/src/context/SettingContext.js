import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SettingContext = createContext()

export function SettingContextProvider({ children }) {
  const navigate = useNavigate()
  // const { userName, setUserName } = useContext(UserContext)
  const [setOpenMenuUser] = useState(false)
  const [setOpenNav] = useState(false)

  function handleNovoPost() {
    setOpenNav(false)
    navigate('/main')
  }

  function handlePosts() {
    setOpenNav(false)
    navigate('/posts')
  }

  function handleHome() {
    setOpenNav(false)
    navigate('/home')
  }

  function handleLogout() {
    setOpenMenuUser(false)
    navigate('/')
  }

  return (
    <SettingContext.Provider
      value={{
        handleNovoPost,
        handlePosts,
        handleHome,
        handleLogout
      }}
    >
      {children}
    </SettingContext.Provider>
  )
}
