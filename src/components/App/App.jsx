import { Route, Routes } from 'react-router-dom';

import Homepage from '../Homepage/Homepage';
import Error from '../Error/Error';
import Login from '../Login/Login';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
