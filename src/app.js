import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Registration from './registration/registration';
import { getCookie } from './utils';
import MainPage from './MainPage/MainPage';

const App = ({ autorization }) => {
  const [userId, setUserId] = useState('');
  useEffect(() => {
    setUserId(getCookie('user_id'));
  }, [autorization]);
  return (
    !userId ? <Registration /> : <MainPage />
  );
};

const mapStateToProps = ({ autorization }) => ({
  autorization,
});
export default connect(mapStateToProps)(App);
