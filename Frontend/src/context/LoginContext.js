import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../services/api'

export const LoginContext = createContext()

export const LoginContextProvider = ({ children }) => {
  const navigate = useNavigate()

  const onSubmit = (req, res) => {
    api
      .post('/user/authenticate', {
        name: req.name,
        // email: req.email,
        password: req.password
      })
      .then(res => {
        localStorage.setItem('token', res.data.token)
        navigate('/home')

        if (res.status === 200) {
          toast.success('Login realizado com sucesso!')
        }
      })
      .catch(err => {
        if (err.response.status === 422) {
          toast.error('Senha Incorreta!')
        }

        if (err.response.status === 404) {
          toast.error('Usuário não encontrado!')
        }
      })
  }

  return (
    <LoginContext.Provider value={{ onSubmit }}>
      {children}
    </LoginContext.Provider>
  )
}
