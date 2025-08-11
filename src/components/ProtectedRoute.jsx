/*
 * File: /Users/yashi/Desktop/classproject/src/components/ProtectedRoute.jsx
 * Project: /Users/yashi/Desktop/classproject
 * Created Date: Monday August 11th 2025
 * Author: Yashi EL
 * -----
 * Last Modified: Monday August 11th 2025 4:15:22 am
 * Modified By: the developer formerly known as Yashi EL at <hi@yashiel.com>
 * -----
 * Copyright (c) 2025 Yashi Digital Agency
 * -----
 * HISTORY:
 */

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
