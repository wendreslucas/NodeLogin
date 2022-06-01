import React from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import EmailIcon from '@mui/icons-material/Email'

const InputEmail = props => {
  const { type, label, margin, onChange, value, variant } = props
  return (
    <TextField
      id="outlined-basic"
      fullWidth
      label={label}
      margin={margin}
      onChange={onChange}
      type={type}
      value={value}
      variant={variant}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <EmailIcon />
          </InputAdornment>
        )
      }}
    />
  )
}

export default InputEmail
