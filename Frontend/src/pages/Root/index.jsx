import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login'
import Cadaster from '../Cadaster'
import Home from '../Home'
import Main from './../Main'

export const PagesRoot = () => (
  <Routes>
    <Route exact path="/" element={<Login />} />
    <Route exact path="/cadaster" element={<Cadaster />} />
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/main" element={<Main />} />
  </Routes>
)
