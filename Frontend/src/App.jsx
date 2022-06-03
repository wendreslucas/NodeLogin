import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { LoginContextProvider } from './context/LoginContext'
import { SettingContextProvider } from './context/SettingContext'

import { PagesRoot } from './pages/Root'
import { GlobalStyle } from './ui/GlobalStyle'
import { BrowserRouter } from 'react-router-dom'
import { RegisterContextProvider } from './context/RegisterContext'
import StoreProvider from './context/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <SettingContextProvider>
          <RegisterContextProvider>
            <LoginContextProvider>
              <GlobalStyle />
              <PagesRoot />
              <ToastContainer />
            </LoginContextProvider>
          </RegisterContextProvider>
        </SettingContextProvider>
      </StoreProvider>
    </BrowserRouter>
  )
}

export default App
