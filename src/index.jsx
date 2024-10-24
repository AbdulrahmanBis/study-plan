import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthProvider from './context/AuthContext';

// Import your components here
import Login from './auth/Login';
import HomePage from './pages/HomePage';
import PrivateRoute from './routes/PrivateRoute';

const App = () => (
  <Provider store={store}>
    <AuthProvider>
      <Router>
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          {/* Example for a protected route */}
          <Route path="/home" element={<PrivateRoute><App /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
