import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from './redux/Reducer/Auth';
import Login from './components/Login/LoginIni';
import SignUp from './components/signUp/SignUp';
import TodoList from './components/Todo/todolist';
import NotFound from './components/notFound/NotFound';


const App = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/todos"
            element={
              user ? (
                <div className="flex">
                  <header>
                    <h1 className="font-bold text-center m-4">
                      Welcome, {user.email}
                      <button
                        className="mb-10 bg-red-900 text-white rounded-xl px-3 ml-4"
                        onClick={() => dispatch(signOut())}
                      >
                        Sign Out
                      </button>
                    </h1>
                  </header>
                  <section>
                    <TodoList />
                  </section>
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;