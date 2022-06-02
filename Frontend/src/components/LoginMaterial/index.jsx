import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { Container, StyleForm, DivBtn, DivInputs, DivSpan } from './styles'
import Logo from '../Logo'
import InputEmail from '../Inputs/Email'
import InputPassword from '../Inputs/Senha'
import Button from '../Buttons/Button'
import { CadasterContext } from '../../context/CadasterContext'
import { InputError } from '../Inputs/Error'
import { toast } from 'react-toastify'

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required()
})

export const FormLogin = () => {
  const navigate = useNavigate()
  const { onSubmit } = React.useContext(CadasterContext)

  function handleCreate() {
    navigate('/cadaster')
  }

  function onError(err) {
    toast.error('Confira os campos digitados!')
  }

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })

  return (
    <Container>
      <StyleForm onSubmit={handleSubmit(onSubmit)}>
        <Logo height={'50px'} width={'100px'} />
        <DivBtn>
          <DivInputs>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: 'Campo obrigatório' }}
              render={({ field: { onChange, value } }) => (
                <InputEmail
                  label="Email*"
                  type="email"
                  name="email"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            {errors.email && (
              <InputError type={errors.email.type} field="email" />
            )}
          </DivInputs>
          <DivInputs>
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
            {errors.password && (
              <InputError type={errors.password.type} field="password" />
            )}
          </DivInputs>
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
