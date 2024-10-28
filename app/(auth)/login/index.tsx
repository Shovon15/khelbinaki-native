import AuthWrapper from '@/components/partials/elements/auth/AuthWrapper';
import ForgetPassword from '@/components/partials/elements/auth/ForgoetPassword';
import InputField from '@/components/partials/elements/formFields/InputField';
import FormSubmitButton from '@/components/partials/elements/FormSubmitButton';
import BaseLayout from '@/components/partials/layouts/BaseLayout';
import { useAuth } from '@/contexts/AuthContext';
import { LOGIN_API } from '@/utils/Apis/auth-apis';
import useAxiosPublicInstance from '@/utils/hooks/useAxiosPublicInstance';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Toast } from 'toastify-react-native';

const LoginScreen = () => {
  const { checkStoredUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const axiosPublicInstance = useAxiosPublicInstance();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      return Toast.error('Please fill all fields');
    }

    const itemData = {
      email,
      password,
    };

    try {
      const res = await axiosPublicInstance.post(LOGIN_API, itemData);

      if (res.data) {
        Toast.success('Login successful');
        await AsyncStorage.setItem('user', JSON.stringify(res.data));
        checkStoredUser();
        router.navigate('/');
      }
    } catch (err: any) {
      console.error(err, 'err'); // Handle error here
      Toast.error(err?.response?.data?.message || 'Login faild');
    }
  };

  return (
    <BaseLayout>
      <AuthWrapper headerTitle='Login'>
        <View style={{ gap: 10 }}>
          <InputField
            placeholder='Email'
            value={email}
            onChange={setEmail}
            icon={<Ionicons name='mail-outline' size={24} color='#999' />}
          />
          <InputField
            type='password'
            placeholder='Password'
            value={password}
            onChange={setPassword}
            icon={
              <Ionicons name='lock-closed-outline' size={24} color='#999' />
            }
          />
          <ForgetPassword />
          <View style={{ paddingTop: 20 }}>
            <FormSubmitButton title='Login' onPress={handleSubmit} />
          </View>
        </View>
      </AuthWrapper>
    </BaseLayout>
  );
};

export default LoginScreen;
