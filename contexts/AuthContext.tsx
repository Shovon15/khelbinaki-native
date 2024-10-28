import { LOGIN_API, REGISTER_API } from '@/utils/Apis/auth-apis';
import useAxiosPublicInstance from '@/utils/hooks/useAxiosPublicInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';
// import { REGISTER_API } from "@/app/Utilities/APIs/AuthAPIs/AuthAPIs";
// import useaxiosPublicInstance from "@/app/Utilities/Hooks/axiosPublicInstance";
// import { LOGIN_API } from "@/utilities/APIs";
// import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from 'react';
import { Toast } from 'toastify-react-native';

const AuthContext = createContext({
  // login: () => {},
  logout: () => {},
  user: null,
  setUser: () => {},
  checkStoredUser: () => {},
  errorMessage: '',
  clearErrorMessage: () => {},
  isLoading: true,
});

export const AuthProvider = ({ children }: any) => {
  const axiosPublicInstance = useAxiosPublicInstance();
  const navigation = useNavigation();

  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  // console.log(user, 'user');

  const checkStoredUser = async () => {
    setIsLoading(true);

    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Error fetching user from storage:', error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    checkStoredUser();
  }, []);

  // const register = async (userData: any) => {
  //   try {
  //     const response = await axiosPublicInstance.post(REGISTER_API, userData);

  //     if (response.data) {
  //       await AsyncStorage.setItem(
  //         'registeredUser',
  //         JSON.stringify(response.data),
  //       );
  //       setErrorMessage('');
  //     }
  //   } catch (error: any) {
  //     setErrorMessage(error.response?.data?.message);
  //   }
  // };

  // const login = async (userData: any) => {
  //   try {
  //     const response = await axiosPublicInstance.post(LOGIN_API, userData);

  //     if (response.data) {
  //       setUser(response.data);

  //       if (response.data.isVerified) {
  //         Toast.success('Login successful');
  //         await AsyncStorage.setItem('user', JSON.stringify(response.data));
  //         setErrorMessage('');
  //         navigation.navigate('/'); // Adjust to your main screen
  //       } else {
  //         Toast.error('Invalid email or password');
  //         setErrorMessage('Please verify your email first!');
  //       }
  //     }
  //   } catch (error: any) {
  //     Toast.error('Error logging in');
  //     setErrorMessage(error.response?.data?.message);
  //   }
  // };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
    navigation.navigate('/login'); // Adjust to your login screen
  };

  const clearErrorMessage = () => {
    setErrorMessage('');
  };

  const values = {
    // login,
    logout,
    user,
    setUser,
    // register,
    checkStoredUser,
    errorMessage,
    clearErrorMessage,
    isLoading,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
