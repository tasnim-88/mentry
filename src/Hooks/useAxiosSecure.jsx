import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { auth } from '../Firebase/firebase.init';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
});

const useAxiosSecure = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const reqInterceptor = axiosSecure.interceptors.request.use(
            async (config) => {
                const user = auth.currentUser;
                if (user) {
                    const token = await user.getIdToken(true);
                    config.headers.authorization = `Bearer ${token}`;
                }
                return config;
            }
        );

        const resInterceptor = axiosSecure.interceptors.response.use(
            (res) => res,
            async (error) => {
                if ([401, 403].includes(error.response?.status)) {
                    await auth.signOut();        // ✅ Firebase logout
                    navigate('/login', { replace: true });
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        };
    }, [navigate]);

    return axiosSecure;
};

export default useAxiosSecure;
