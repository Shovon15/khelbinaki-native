import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import ScreenContainer from '@/components/partials/elements/ScreenContainer';

const BaseLayout = ({ children }: any) => {
  return (
    <ScreenContainer>
      <Navbar />
      <View style={styles.container}>
        <View style={styles.content}>{children}</View>
        <Footer />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
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
