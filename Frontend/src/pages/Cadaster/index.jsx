import React, { useEffect } from 'react'
import { UserModal } from '../../components/UserModal'

const Cadaster = () => {
  useEffect(() => {
    document.title = 'OneBlue | Cadaster'
  }, [])

  return (
    <>
      <UserModal />
    </>
  )
}

export default Cadaster
