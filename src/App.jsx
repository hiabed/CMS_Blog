import './App.css';
import HomePage from './HomePage';
import React from "react";
import LoginForm from './LoginForm';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './SignUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // 🔐 login state
  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Navigate to="/home" />
          ) : (
            <LoginForm onLogin={() => setIsLoggedIn(true)} />
          )
        }
      />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/home"
        element={
          isLoggedIn ? (
            <HomePage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}

export default App;