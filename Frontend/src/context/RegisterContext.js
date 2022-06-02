import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../services/api'

export const RegisterContext = createContext()

export const RegisterContextProvider = ({ children }) => {
  const navigate = useNavigate()

  const createUser = (req, res) => {
    api
      .post('/user/register', {
        name: req.name,
        email: req.email,
        password: req.password
      })
      .then(res => {
        if (res.status === 201) {
          toast.success('Usuário criado com sucesso!')
          navigate('/')
        }
      })
      .catch(err => {
        if (err.response.status === 400) {
          toast.error('Ops Email já existe!')
        }

        if (err.response.status === 404) {
          toast.error('Ops Username já existe!')
        }
      })
  }

  return (
    <RegisterContext.Provider
      value={{
        createUser
      }}
    >
      {children}
    </RegisterContext.Provider>
  )
}
