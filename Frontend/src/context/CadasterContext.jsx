import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../services/api'

export const CadasterContext = createContext()

export const CadasterContextProvider = ({ children }) => {
  const navigate = useNavigate()

  function onSubmit(req, res) {
    api
      .post('/login', {
        name: req.name,
        email: req.email,
        password: req.password
      })
      .then(res => {
        if (res.data.erro) {
          toast.error('Não foi possível entrar')
        } else {
          navigate('/home')
        }
      })
  }

  const createUser = async data => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password
    }
    console.log({ data })
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
