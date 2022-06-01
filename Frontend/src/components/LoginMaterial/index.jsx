import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'

import { Container, StyleForm, DivBtn, DivSpan } from './styles'
import Button from '../Buttons/Button'
import InputUsername from '../Inputs/Username'
import InputPassword from '../Inputs/Senha'
import Logo from '../Logo'
import { CadasterContext } from '../../context/CadasterContext'

export const FormLogin = () => {
  const navigate = useNavigate()
  const { onSubmit } = React.useContext(CadasterContext)

  const { handleSubmit, control } = useForm()

  function handleCreate() {
    navigate('/cadaster')
  }

  return (
    <Container>
      <StyleForm onSubmit={handleSubmit(onSubmit)}>
        <Logo />
        <DivBtn>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({ field: { onChange, value } }) => (
              <InputUsername
                autoFocus
                label="Username"
                type="text"
                name="name"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({ field: { onChange, value } }) => (
              <InputPassword
                Label="Password"
                type="password"
                value={value}
                onChange={onChange}
                name="password"
              />
            )}
          />
          <Button text="ENTER" />
          <DivSpan>
            <button className="btn" onClick={handleCreate}>
              Novo por aqui? Cadastre-se aqui!
            </button>
          </DivSpan>
        </DivBtn>
      </StyleForm>
    </Container>
  )
}
