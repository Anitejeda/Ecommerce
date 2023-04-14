import React from 'react';
import LoginForm from '../components/login/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const isUserLogged = useSelector((state) => state.user.isLogged);
  console.log(isUserLogged);

  if (isUserLogged) return <Navigate to="/" replace />;
  else
    return (
      <div>
        <p>Welcome! Enter your Email and your password to continue.</p>
        <div className="bg-blue-300 w-3/6">
          <h2 className="text-center font-bold">Test Data</h2>
          <p>aniluztejeda1@gmail.com</p>
          <p>asdasd</p>
        </div>
        <LoginForm />
      </div>
    );
};

export default Login;
