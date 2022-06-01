import React, { useEffect } from 'react'
import { AddUser } from './../../components/AddUser'

const Cadaster = () => {
  useEffect(() => {
    document.title = 'One | Cadaster'
  }, [])

  return (
    <>
      <AddUser />
    </>
  )
}

export default Cadaster
