import React from 'react'
import { Routes, Route } from 'react-router-dom';

// Components
import Login from './Components/Login';
import Register from './Components/Register';
import AppMain from './Components/AppMain';
import ResetPassword from './Components/ResetPassword';
import NotFound404 from './Components/NotFound404';
import Cart from './Components/Cart';
import Products from './Components/Products';
import TopSelling from './Components/TopSelling';

const App = () => {
  return (
    <Routes>
      <Route element={<AppMain />} path="/" />
      <Route element={<TopSelling />} path="/top-selling" />
      <Route element={<Products />} path="/products" />
      <Route element={<Cart />} path="/cart" />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<ResetPassword />} path="/reset-password" />
      <Route element={<NotFound404 />} path="*" />
    </Routes>
  )
}

export default App;
