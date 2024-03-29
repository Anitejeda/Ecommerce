import React, { useState } from 'react';
import loginService from '../../services/loginService';
import { logInState, updateToken, updateUserData } from '../../store/slices/user.slice';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [toggleType, setToggleType] = useState('password');
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const handleClickType = () => {
    if (toggleType === 'password') setToggleType('text');
    else if (toggleType === 'text') setToggleType('password');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const login = async () => {
    const loginData = await loginService(loginFormData);
    const userData = {
      id: loginData.user.id,
      firstName: loginData.user.firstName,
      lastName: loginData.user.lastName,
      email: loginData.user.email,
    };

    const token = loginData.token;

    dispatch(updateUserData(userData));
    dispatch(updateToken(token));
    dispatch(logInState(userData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="emailId">Email:</label>
          <input
            type="email"
            id="emailId"
            placeholder="example@miemail.com"
            name="email"
            value={loginFormData.email}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="passwordId">Password:</label>
          <input
            type={toggleType}
            id="passwordId"
            name="password"
            value={loginFormData.password}
            onChange={(e) => handleChange(e)}
            required
          />
          <button type="button" onClick={() => handleClickType()}>
            <i className="bx bxs-low-vision"></i>
          </button>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default LoginForm;
