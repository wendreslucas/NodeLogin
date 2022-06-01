import React, { createContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

export const UserContext = createContext()

export function UserContextProvider({ children }) {
  const [userName, setUserName] = useState('')

  return (
    <UserContext.Provider
      value={useMemo(() => ({ userName, setUserName }), [userName])}
    >
      {children}
    </UserContext.Provider>
  )
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
