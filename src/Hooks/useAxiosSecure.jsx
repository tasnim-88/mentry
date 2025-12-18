import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { auth } from '../Firebase/firebase.init';

const axiosSecure = axios.create({
  baseURL: 'https://digital-life-lessons-server-henna.vercel.app',
});

// Attach token from localStorage dynamically for every request
axiosSecure.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token'); // always use the latest token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle unauthorized responses globally
axiosSecure.interceptors.response.use(
  (res) => res,
  (error) => {
    if ([401, 403].includes(error.response?.status)) {
      console.log('Unauthorized! Please log in again.');
    }
    return Promise.reject(error);
  }
);

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        localStorage.setItem('token', token);
      } else {
        localStorage.removeItem('token');
        navigate('/login', { replace: true });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  return { axiosSecure, loading };
};

export default useAxiosSecure;