import React, { useContext } from 'react'
import { StyleFormCreate } from './style.js'
import Subtitle from '../Text/Subtitle'
import Label from '../Text/Label'
import { CadasterContext } from '../../context/CadasterContext'

function AddUser() {
  const { title, content, handleTitle, handleSubmit } =
    useContext(CadasterContext)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <StyleFormCreate onSubmit={handleSubmit}>
        <Subtitle subtitle="" />
        <Label bottom="10px" label="Title" />
        {/* <Input
          autoFocus
          name="Name"
          value={title}
          type="text"
          onChange={handleTitle}
          placeholder="Name Here"
          size="559px"
        /> */}

        <Label bottom="10px" label="Password" />
        {/* <Input
          name="Password"
          value={content}
          type="password"
          onChange={handleTitle}
          placeholder="Password Here"
          size="559px"
        /> */}

        {/* <Button
          disabled={!title || !content}
          margin="474px"
          onClick={handleClick(TransitionDown)}
          size="111px"
          text="CREATE"
          type="submit"
        /> */}
      </StyleFormCreate>
    </>
  )
}

export default AddUser
