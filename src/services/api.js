import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Attach token to every request
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});
