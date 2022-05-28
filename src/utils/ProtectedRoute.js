import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ redirectPath = '/login', children }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  if (!userInfo) return <Navigate to={redirectPath} replace />;
  return children;
};

export default ProtectedRoute;
