import { Route, Routes } from 'react-router-dom';
import './App.css';

import CreateAccount from './pages/CreateAccount';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import UserInfo from './pages/UserInfo'
import UserUpdate from './pages/UserUpdate';

function App() {
  return (
    <div className='App'>
      
      <div className='content'>
        <Routes>
          <Route path='/createaccount' element={<CreateAccount />} />
          <Route path='/userinfo' element={<UserInfo />} />
          <Route path='/userupdate' element={<UserUpdate />} />
          <Route path='/' element={<Login />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
