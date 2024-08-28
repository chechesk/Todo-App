import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { signOut } from './redux/Reducer/Auth';
import Login from './components/Login/LoginIni';


const App = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      {user ? (
        <div className='flex flex-row '>
          <h1>Welcome, {user.email}</h1>
          <button onClick={() => dispatch(signOut())}>Sign Out</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;