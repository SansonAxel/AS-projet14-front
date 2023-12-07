import { Navigate, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';

import Homepage from '../Homepage/Homepage';
import Error from '../Error/Error';
import Login from '../Login/Login';

import './App.scss';
import Dashboard from '../Dashboard/Dashboard';

const App = () => {
  const getTokenFromCookie = () => {
    return Cookies.get('token');
  };
  const isAuthenticated = !!getTokenFromCookie();

  // console.log(`cookie : ${tokenCookie}`);
  // console.log(`token state : ${token}`);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
        {/* TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST  */}
        {isAuthenticated ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          <Route path="/dashboard" element={<Navigate to="/login" />} />
        )}
        {/* TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST  */}
      </Routes>
    </div>
  );
};

export default App;
