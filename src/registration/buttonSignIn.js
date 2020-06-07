import React from 'react';
import { connect } from 'react-redux';
import { isAuthorization } from '../action/isAuthorization';

const ButtonSignIn = (props) => {
  const { login, password, isAuthorization } = props;
  const handleSingIn = () => {
    fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: `${login}`, password: `${password}` }),
    })
      .then((response) => response.json())
      .then((data) => {
        let timestamp = new Date(Date.now() + 14400000);
        timestamp = timestamp.toUTCString();
        document.cookie = `user_id=${data.userId.id}; expires=${timestamp}`;
        isAuthorization(true);
      });
  };
  return (
    <input type="button" name="button" value="ВОЙТИ" className="button" onClick={handleSingIn} />
  );
};
const mapStateToProps = (state) => ({
  state,
});
export default connect(mapStateToProps, { isAuthorization })(ButtonSignIn);
