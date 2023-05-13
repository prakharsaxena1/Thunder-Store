import React, { Suspense, useEffect } from 'react';
import {
  Route, createRoutesFromElements, createBrowserRouter, RouterProvider,
} from 'react-router-dom';
import { useAppDispatch } from './redux/hooks';
import { setUserDetails } from './redux/slices/user/userSlice';
import AccountApis from './redux/apis/Account/account.api';
import { setCartItems } from './redux/slices/cart/cartSlice';
import Loader from './Components/Loader';
import { clearLS, getFromLS } from './utils/helper';

// Components
const RootLayout = React.lazy(() => import('./Components/RootLayout'));
const ProtectedRoutes = React.lazy(() => import('./Pages/ProtectedRoutes'));
const Search = React.lazy(() => import('./Pages/Search'));
const Order = React.lazy(() => import('./Pages/Order'));
const Home = React.lazy(() => import('./Pages/Home'));
const Login = React.lazy(() => import('./Pages/Login'));
const Register = React.lazy(() => import('./Pages/Register'));
const NotFound404 = React.lazy(() => import('./Pages/NotFound404'));
const UserProfile = React.lazy(() => import('./Pages/UserProfile'));
const Product = React.lazy(() => import('./Pages/Product'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route element={<Search />} path="search/:searchQuery" />
        <Route element={<Product />} path="/product/:id" />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Order />} path="/orders" />
          <Route element={<UserProfile />} path="/settings" />
        </Route>
        <Route element={<NotFound404 />} path="*" />
      </Route>
      <Route element={<Login />} path="login" />
      <Route element={<Register />} path="register" />
    </Route>,
  ),
);

const App = () => {
  const dispatch = useAppDispatch();
  const [RefreshToken] = AccountApis.useRefreshTokenMutation();
  useEffect(() => {
    const loggedInUser = getFromLS('user', {});
    if (loggedInUser.id) {
      RefreshToken({ token: loggedInUser.token })
        .unwrap().then((res) => {
          if (res.success && res.isAuth) {
            dispatch(setUserDetails({
              id: loggedInUser.id,
              username: loggedInUser.username,
              email: loggedInUser.email,
              profilePhoto: loggedInUser.profilePhoto,
            }));
          } else {
            clearLS();
          }
        });
    }
    dispatch(setCartItems([]));
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
