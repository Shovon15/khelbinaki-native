import AuthWrapper from '@/components/partials/elements/auth/AuthWrapper';
import ForgetPassword from '@/components/partials/elements/auth/ForgoetPassword';
import InputField from '@/components/partials/elements/formFields/InputField';
import FormSubmitButton from '@/components/partials/elements/FormSubmitButton';
import BaseLayout from '@/components/partials/layouts/BaseLayout';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email, password, 'form data');
    // Handle login logic here
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
            <FormSubmitButton title='Login' onPress={handleLogin} />
          </View>
        </View>
      </AuthWrapper>
    </BaseLayout>
  );
};

export default LoginScreen;
