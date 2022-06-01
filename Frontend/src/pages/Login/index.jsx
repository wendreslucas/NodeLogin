import React, { useEffect } from 'react'
import { FormLogin } from '../../components/LoginMaterial'

const Login = () => {
  useEffect(() => {
    document.title = 'OneBlue | Login'
  }, [])

  return (
    <>
      <FormLogin />
    </>
  )
}

export default Login
