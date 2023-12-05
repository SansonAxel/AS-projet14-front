import { Route, Routes } from 'react-router-dom';

import Homepage from '../Homepage/Homepage';
import Error from '../Error/Error';
import Login from '../Login/Login';

import './App.scss';
import FormTemplate from '../FormTemplate/FormTemplate';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
        {/* TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST  */}
        <Route path="/test" element={<FormTemplate />} />
        {/* TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST  */}
      </Routes>
    </div>
  );
};

export default App;
