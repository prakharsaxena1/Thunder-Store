import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useAppSelector } from '../../redux/hooks';
import { userSelector } from '../../redux/slices/user/user.selector';

const ProtectedRoutes = () => {
  const userData = useAppSelector(userSelector);
  const { enqueueSnackbar } = useSnackbar();

  if (userData.id) {
    return (
      <Outlet />
    );
  }
  enqueueSnackbar('Login required', { variant: 'info', preventDuplicate: true });
  return (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
