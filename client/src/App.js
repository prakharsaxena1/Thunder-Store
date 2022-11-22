import React from 'react'
import {Routes, Route} from 'react-router-dom';

// Components
import LandingPage from './Components/LandingPage/LandingPage';
import ProductPage from './Components/ProductPage/ProductPage';
import UserPage from './Components/UserPage/UserPage';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AccountPage from './Components/AccountPage/AccountPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/account/*" element={<AccountPage />} />
      <Route path="/product/*" element={<ProductPage />} />
      <Route path="/user/*" element={<UserPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App