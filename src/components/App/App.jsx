import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Cookies from 'js-cookie';

import routesConfig from '../../routes/routes';

export default function App() {
  const getTokenCookie = () => {
    return Cookies.get('token');
  };

  const isAuthenticated = getTokenCookie();

  return (
    <Routes>
      {routesConfig.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          title={route.name}
          element={
            route.isPrivate && !isAuthenticated ? (
              <Navigate to="/login" replace />
            ) : (
              route.element
            )
          }
        />
      ))}
    </Routes>
  );
}
