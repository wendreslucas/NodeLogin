import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { Container, StyleForm, DivBtn, DivInputs, DivSpan } from './styles'
import Logo from '../Logo'
import InputUsername from '../Inputs/Username'
import InputPassword from '../Inputs/Senha'
import Button from '../Buttons/Button'
import { CadasterContext } from '../../context/RegisterContext'
import { InputError } from '../Inputs/Error'
import { toast } from 'react-toastify'

const validationSchema = yup.object({
  name: yup.string().required(),
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
            {errors.name && <InputError type={errors.name.type} field="name" />}
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
