// src/redux/reducers/authReducer.js
import { LOGIN_SUCCESS } from '../actions/authActions';

const initialState = {
  isAuthenticated: false,
  username: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

export default authReducer;
