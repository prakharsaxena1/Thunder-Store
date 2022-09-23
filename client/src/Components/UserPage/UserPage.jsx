import React from 'react'
import {Routes, Route} from 'react-router-dom';

// Components
import PaymentPage from '../PaymentPage/PaymentPage';
import ErrorPage from '../ErrorPage/ErrorPage';


const UserPage = () => {
  return (
    <Routes>
      <Route path="/checkout" element={<PaymentPage />} />
      <Route path="*" element={<ErrorPage />} />
  </Routes>
  )
}

export default UserPage