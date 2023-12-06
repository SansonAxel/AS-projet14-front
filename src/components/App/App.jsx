import { Route, Routes } from 'react-router-dom';

import Homepage from '../Homepage/Homepage';
import Error from '../Error/Error';
import Login from '../Login/Login';

import './App.scss';
import Dashboard from '../Dashboard/Dashboard';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
        {/* TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST  */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST  */}
      </Routes>
    </div>
  );
};

export default App;
