import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import './App.scss';
import Error from '../Error/Error';
import LoginForm from '../Homepage/LoginForm/LoginForm';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
