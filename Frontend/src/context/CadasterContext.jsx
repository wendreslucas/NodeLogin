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
        email: req.email,
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

  const createUser = async data => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password
    }

    const res = await api.post('/user/register', user)

    if (res.status === 200) {
      toast.error('Ops! Usuário já existe')
    }

    if (res.status === 201) {
      toast.success('Yeah! Usuário cadastrado com sucesso')
      navigate('/')
    }
    if (res.status === 400) {
      toast.error('Ops! Confira os campos digitados!')
    }
    if (res.status === 401) {
      toast.error('Ops! Confira as informações')
    }
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
