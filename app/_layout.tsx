import Navbar from '@/components/partials/sections/Navbar';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='index' />
        <Stack.Screen name='login' />
        <Stack.Screen name='register' />
      </Stack>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: screenHeight,
    display: 'flex',
  },
});
