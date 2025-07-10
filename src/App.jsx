import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Products from './components/pages/Product'
import SignUp from './components/pages/SignUp'
import Services from './components/pages/Services'
import Login from './components/pages/Login'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
