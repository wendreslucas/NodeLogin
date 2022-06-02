import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { CadasterContextProvider } from './context/CadasterContext'
import { SettingContextProvider } from './context/SettingContext'
import { UserContextProvider } from './context/UserContext'
import { PagesRoot } from './pages/Root'
import { GlobalStyle } from './ui/GlobalStyle'

function App() {
  return (
    <BrowserRouter>
      <SettingContextProvider>
        <UserContextProvider>
          <CadasterContextProvider>
            <LoginContext>
              <GlobalStyle />
              <PagesRoot />
              <ToastContainer />
            </LoginContext>
          </CadasterContextProvider>
        </UserContextProvider>
      </SettingContextProvider>
    </BrowserRouter>
  )
}

export default App
