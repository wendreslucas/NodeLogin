import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../services/api'

export const CadasterContext = createContext()

export const CadasterContextProvider = ({ children }) => {
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
    <CadasterContext.Provider
      value={{
        onSubmit,
        createUser
      }}
    >
      {children}
    </CadasterContext.Provider>
  )
}
