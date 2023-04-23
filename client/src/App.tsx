import React, { useEffect } from 'react';
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
import UserProfile from './Pages/UserProfile';
import Product from './Pages/Product';
import { useAppDispatch } from './redux/hooks';
import { setUserDetails } from './redux/slices/user/userSlice';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route element={<Search />} path="search/:searchQuery" />
        <Route element={<TopSelling />} path="/top-sellers/:category" />
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

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch(setUserDetails({
        id: foundUser.id,
        username: foundUser.username,
        email: foundUser.email,
      }));
    }
  }, []);
  return (
    <RouterProvider router={router} />
  );
};

export default App;
