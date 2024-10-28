import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import ScreenContainer from '@/components/partials/elements/ScreenContainer';
import ToastManager from 'toastify-react-native';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { useNavigation, useRouter } from 'expo-router';

const BaseLayout = ({ children }: any) => {
  const { user, isLoading } = useAuth();
  // const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user === null) {
      router.navigate('/login'); // Replace with your login screen name
    }
  }, [isLoading, user]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#000000' />
      </View>
    );
  }
  return (
    <ScreenContainer>
      <ToastManager />
      <Navbar />
      <View style={styles.container}>
        <View style={styles.content}>{children}</View>
        <Footer />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  footer: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6c757d',
  },
});

export default BaseLayout;
