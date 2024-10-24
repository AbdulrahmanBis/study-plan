import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Ensure the correct path
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions/authActions'; // Import Redux action

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login } = useContext(AuthContext); // Use AuthContext for authentication
  const dispatch = useDispatch(); // Hook to dispatch Redux actions

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate login for any credentials
    if (username && password) {
      login(username); // Simulate successful login in context
      dispatch(loginSuccess(username)); // Update Redux store
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
