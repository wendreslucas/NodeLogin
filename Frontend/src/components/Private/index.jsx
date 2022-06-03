import React, { useContext } from 'react'
import { Route, Navigate, useLocation } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

function RoutesPrivate({ children }) {
  const location = useLocation()

  const token = localStorage.getItem('token')

  if (token === null || token === undefined) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

export default RoutesPrivate
