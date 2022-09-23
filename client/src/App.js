import React from 'react'
import {Routes, Route} from 'react-router-dom';

// Components
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/AccountPage/Login';
import Register from './Components/AccountPage/Register';
import ProductPage from './Components/ProductPage/ProductPage';
import UserPage from './Components/UserPage/UserPage';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/*" element={<ProductPage />} />
      <Route path="/user/*" element={<UserPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App