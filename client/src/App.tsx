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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route element={<Search />} path="search" />
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
