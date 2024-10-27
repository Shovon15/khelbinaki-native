import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const ForgetPassword = () => {
  const router = useRouter();

  const handlePress = () => {
    router.navigate('/forgetPassword'); // Make sure the 'ForgetPassword' screen is correctly registered in your navigation
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
    paddingStart: 15,
  },
  linkText: {
    color: '#6F747D',
    fontSize: 14,
  },
});

export default ForgetPassword;
