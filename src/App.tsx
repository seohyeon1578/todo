import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import Register from './pages/Register';
import { RootState } from './store/store';

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Main/> : <Login/>}
      />
      <Route
        path="/login"
        element={<Login/>}
      />
      <Route
        path="/register"
        element={<Register/>}
      />
    </Routes>
  );
}

export default App;
