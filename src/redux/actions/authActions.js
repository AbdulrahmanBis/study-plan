// src/redux/actions/authActions.js
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = (username) => ({
  type: LOGIN_SUCCESS,
  payload: { username },
});
