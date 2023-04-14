import React from 'react';
import LoginForm from '../components/login/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const isUserLogged = useSelector((state) => state.user.isLogged);

  return (
    <div>
      <p>Welcome! Enter your Email and your password to continue.</p>
      <div className="bg-blue-300 w-3/6">
        <h2 className="text-center font-bold">Test Data</h2>
        <p>john@gmail.com</p>
        <p>john1234</p>
      </div>
      <LoginForm />
      {isUserLogged && <Navigate to="/" replace />}
    </div>
  );
};

export default Login;
