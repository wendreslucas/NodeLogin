import React from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const InputUsername = props => {
  const { autoFocus, type, label, margin, onChange, value, variant } = props
  return (
    <TextField
      id="outlined-basic"
      fullWidth
      type={type}
      label={label}
      margin={margin}
      onChange={onChange}
      value={value}
      variant={variant}
      autoFocus={autoFocus}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircleIcon />
          </InputAdornment>
        )
      }}
    />
  )
}

export default InputUsername
