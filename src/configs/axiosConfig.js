import axios from 'axios';

const axiosInstance = axios.create({
    // default headers
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const username = import.meta.env.VITE_API_USERNAME;
    const password = import.meta.env.VITE_API_PASSWORD;
    if (username && password) {
      config.auth = {
        username: username,
        password: password
      };
    }
    console.log(config)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;