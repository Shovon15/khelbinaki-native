import { View, Text } from 'react-native';
import React, { useState } from 'react';
import BaseLayout from '@/components/partials/layouts/BaseLayout';
import AuthWrapper from '@/components/partials/elements/auth/AuthWrapper';
import InputField from '@/components/partials/elements/formFields/InputField';
import FormSubmitButton from '@/components/partials/elements/FormSubmitButton';
import { Ionicons } from '@expo/vector-icons';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    console.log(name, email, password, confirmPassword, 'form data');
    // Handle login logic here
  };
  return (
    <BaseLayout>
      <AuthWrapper headerTitle='Signup'>
        <View style={{ gap: 10 }}>
          <InputField
            placeholder='Name'
            value={name}
            onChange={setName}
            icon={<Ionicons name='person-outline' size={24} color='#999' />}
          />
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
            <FormSubmitButton title='Signup' onPress={handleRegister} />
          </View>
        </View>
      </AuthWrapper>
    </BaseLayout>
  );
};

export default RegisterPage;
