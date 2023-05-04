import React, { useEffect } from 'react';
import {
  Route, createRoutesFromElements, createBrowserRouter, RouterProvider,
} from 'react-router-dom';

// Components
import RootLayout from './Components/RootLayout';
import Search from './Pages/Search';
import Order from './Pages/Order';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ResetPassword from './Pages/ResetPassword';
import NotFound404 from './Pages/NotFound404';
import UserProfile from './Pages/UserProfile';
import Product from './Pages/Product';
import { useAppDispatch } from './redux/hooks';
import { setUserDetails } from './redux/slices/user/userSlice';
import AccountApis from './redux/apis/Account/account.api';
import { setCartItems } from './redux/slices/cart/cartSlice';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route element={<Search />} path="search/:searchQuery" />
        <Route element={<Product />} path="/product/:id" />
        <Route element={<Order />} path="/orders" />
        <Route element={<UserProfile />} path="/settings" />
        <Route element={<NotFound404 />} path="*" />
      </Route>
      <Route element={<Login />} path="login" />
      <Route element={<Register />} path="register" />
      <Route element={<ResetPassword />} path="reset-password" />
    </Route>,
  ),
);

const App = () => {
  const dispatch = useAppDispatch();
  const [RefreshToken] = AccountApis.useRefreshTokenMutation();
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      RefreshToken({ token: foundUser.token });
      dispatch(setUserDetails({
        id: foundUser.id,
        username: foundUser.username,
        email: foundUser.email,
        profilePhoto: foundUser.profilePhoto,
      }));
      dispatch(setCartItems([]));
    }
  }, []);
  return (
    <RouterProvider router={router} />
  );
};

export default App;
