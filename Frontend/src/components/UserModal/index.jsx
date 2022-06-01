import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Overlay,
  Container,
  DivHeader,
  StyleForm,
  DivBtn,
  DivInputs,
  DivSpan
} from './styles'
import Button from '../Buttons/Button'
import InputUsername from '../Inputs/Username'
import InputPassword from '../Inputs/Senha'
import { IoClose } from 'react-icons/io5'
import Logo from '../Logo'
import { CadasterContext } from '../../context/CadasterContext'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputError } from '../Inputs/Error'
import { toast } from 'react-toastify'
import InputEmail from './../Inputs/Email/index'

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null])
})

export const UserModal = () => {
  const { register } = useForm()
  const navigate = useNavigate()
  const { createUser } = React.useContext(CadasterContext)

  function handleClose() {
    navigate('/')
  }

  function onSubmit(data) {
    createUser(data)
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
    <Overlay>
      <Container>
        <StyleForm onSubmit={handleSubmit(onSubmit, onError)}>
          <DivHeader>
            <Logo />
            <button className="btn" onClick={handleClose}>
              <IoClose />
            </button>
          </DivHeader>
          <DivBtn>
            <DivInputs>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: 'Campo obrigatório' }}
                render={({ field: { onChange, value } }) => (
                  <InputUsername
                    autoFocus
                    label="Username*"
                    type="text"
                    name="name"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              {errors.name && (
                <InputError type={errors.name.type} field="name" />
              )}
            </DivInputs>
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
                rules={{
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 3,
                    message: 'Mínimo de 3 caracteres'
                  }
                }}
                render={({ field: { onChange, value } }) => (
                  <InputPassword
                    Label="Password*"
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
            <div>
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                rules={{ required: 'Campo obrigatório' }}
                render={({ field: { onChange, value } }) => (
                  <InputPassword
                    Label="Confirm Password*"
                    type="password"
                    value={value}
                    onChange={onChange}
                    name="confirmPassword"
                  />
                )}
              />
              {errors.confirmPassword && (
                <InputError
                  type={errors.confirmPassword.type}
                  field="confirmPassword"
                />
              )}
            </div>
            <Button marginTop="10px" marginBottom="10px" text="SAVE" />
            <DivSpan>
              <Link to="/">
                <span>Já tem uma conta?</span>
              </Link>
            </DivSpan>
          </DivBtn>
        </StyleForm>
      </Container>
    </Overlay>
  )
}
