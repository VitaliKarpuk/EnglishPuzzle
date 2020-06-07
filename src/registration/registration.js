import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ButtonSignIn from './buttonSignIn';
import Error from './Error';

const Registration = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const changeLogin = (e) => {
    setLogin(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const createUser = (e) => {
    e.preventDefault();
    if (login && password) {
      fetch('https://afternoon-falls-25894.herokuapp.com/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: `${login}`, password: `${password}` }),
      })
        .then((response) => response.json())
        .then(({ id }) => {
          let timestamp = new Date(Date.now() + 14400000);
          timestamp = timestamp.toUTCString();
          document.cookie = `user_id=${id}; expires=${timestamp}`;
        })
        .catch((err) => setError('This user already exists.'));
    }
  };
  return (
    <>
      <div id="wrapper">
        <div className="user-icon"></div>
        <div className="pass-icon"></div>
        <form name="login-form" className="login-form" action="" method="post" onSubmit={createUser}>
          <div className="header">
            <h1>Авторизация</h1>
            <span>Введите ваши регистрационные данные для входа в ваш личный кабинет. </span>
          </div>
          <div className="content">
            <input name="email" type="email" className="input username" placeholder="Email" value={login} onChange={changeLogin} />
            <input name="password" type="password" minLength='8' pattern="(?=.*[\[\]\-+_{}.,;:%!@#$&*])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="input password" placeholder="Пароль" value={password} onChange={changePassword} />
          </div>
          <div className="footer">
            <ButtonSignIn login = {login} password = {password}/>
            <input type="submit" name="submit" value="Регистрация" className="register" onSubmit={createUser}/>
            {error && <Error error={error}/>}
          </div>
        </form>
      </ div>
      <div className="gradient"></div>
    </>
  );
};

export default Registration;
