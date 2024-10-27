import React, { ReactNode, useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import backgroundImage from '@/assets/images/background.png';
import Footer from '../sections/Footer';

const ScreenContainer = ({ children }: { children: ReactNode }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={20}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollView}>
        <ImageBackground
          source={backgroundImage} // Or require('./path/to/local-image.jpg')
          style={styles.background}
          resizeMode='cover' // Optionally, you can adjust the image resizing mode
        >
          <View style={styles.glassEffect}></View>

          <View
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <View style={{ flex: 1, justifyContent: 'center' }}>
              {children}
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  glassEffect: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent white
    padding: 20,
    width: '100%',
    height: '100%', // Adjust width as needed
    alignItems: 'center', // Center text inside
  },
});

export default ScreenContainer;
