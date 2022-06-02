import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { LoginContextProvider } from './context/LoginContext'
import { SettingContextProvider } from './context/SettingContext'
import { UserContextProvider } from './context/UserContext'
import { PagesRoot } from './pages/Root'
import { GlobalStyle } from './ui/GlobalStyle'

function App() {
  return (
    <BrowserRouter>
      <SettingContextProvider>
        <UserContextProvider>
          <LoginContextProvider>
            <GlobalStyle />
            <PagesRoot />
            <ToastContainer />
          </LoginContextProvider>
        </UserContextProvider>
      </SettingContextProvider>
    </BrowserRouter>
  )
}

export default App
