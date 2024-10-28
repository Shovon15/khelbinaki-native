import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import BaseLayout from '@/components/partials/layouts/BaseLayout';
import AuthWrapper from '@/components/partials/elements/auth/AuthWrapper';
import InputField from '@/components/partials/elements/formFields/InputField';
import FormSubmitButton from '@/components/partials/elements/FormSubmitButton';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import useAxiosPublicInstance from '@/utils/hooks/useAxiosPublicInstance';
import { Toast } from 'toastify-react-native';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const { token } = useLocalSearchParams<{ token: string }>();
  const axiosPublicInstance = useAxiosPublicInstance();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (token) {
      const itemData = {
        token,
        password,
        password2: confirmPassword,
      };

      try {
        const res = await axiosPublicInstance.post('registerUser/', itemData);
  
        if (res.data) {
          // toast.success('Registration successful, Please Login');
          Toast.success('Registration successful, Please Login');
          router.navigate('/login');
        }
      } catch (err) {
        console.error(err, 'err'); // Handle error here
      }
    }
  };

  useEffect(() => {
    const fetchVerifiedUser = async () => {
      if (token) {
        try {
          const res = await axiosPublicInstance.get('verifiedUser/', {
            params: { token },
          });
          const user = res.data?.user;
          setName(user?.name);
          setEmail(user?.email);
          // setLevel(user.level);
          // setIsRegistered(user.isRegistered);
          // setDp(user.dp);
        } catch (err) {
          console.error(err, 'err'); // Handle error here
        }
      }
    };

    fetchVerifiedUser();
  }, [axiosPublicInstance, setEmail, setName, token]);

  return (
    <BaseLayout>
      <AuthWrapper headerTitle='Signup'>
        <View style={{ gap: 10 }}>
          <InputField
            placeholder='Name'
            value={name}
            onChange={setName}
            icon={<Ionicons name='person-outline' size={24} color='#999' />}
            disabled
          />
          <InputField
            placeholder='Email'
            value={email}
            onChange={setEmail}
            icon={<Ionicons name='mail-outline' size={24} color='#999' />}
            disabled
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
          <InputField
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={setConfirmPassword}
            icon={
              <Ionicons name='lock-closed-outline' size={24} color='#999' />
            }
          />
          <View style={{ paddingTop: 20 }}>
            <FormSubmitButton title='Signup' onPress={handleSubmit} />
          </View>
        </View>
      </AuthWrapper>
    </BaseLayout>
  );
};

export default RegisterPage;
