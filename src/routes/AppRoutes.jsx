import { Route, BrowserRouter, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../layout/Home/Home'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
