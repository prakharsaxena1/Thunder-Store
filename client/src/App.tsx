import React from 'react';
import {
  Route, createRoutesFromElements, createBrowserRouter, RouterProvider,
} from 'react-router-dom';

// Components
import RootLayout from './Components/RootLayout';
import Search from './Pages/Search';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ResetPassword from './Components/ResetPassword';
import NotFound404 from './Pages/NotFound404';
import TopSelling from './Pages/TopSelling';
import Cart from './Pages/Cart';
import UserProfile from './Pages/UserProfile';
import Product from './Pages/Product';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route element={<Search />} path="search/:searchQuery" />
        <Route element={<TopSelling />} path="/top-sellers/:category" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Product />} path="/product/:id" />
        <Route element={<UserProfile />} path="/user" />
        <Route element={<NotFound404 />} path="*" />
      </Route>
      <Route element={<Login />} path="login" />
      <Route element={<Register />} path="register" />
      <Route element={<ResetPassword />} path="reset-password" />
    </Route>,
  ),
);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
