import axios from 'axios';
import { useMemo } from 'react';
import Constants from 'expo-constants';
import { useAuth } from '@/contexts/AuthContext';
import { API_URL } from '../Apis/Api';
import { Toast } from 'toastify-react-native';

let renderCount = 0;

function useAxiosInstance() {
  const { user, logout } = useAuth();

  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: `${API_URL}customerApp/protected/`,
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    });

    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          if (renderCount < 1) {
            Toast.error('please login again');

            renderCount++;
          }
          logout();
        }
        return Promise.reject(error);
      },
    );

    return instance;
  }, [user, logout]);

  return axiosInstance;
}

export default useAxiosInstance;
