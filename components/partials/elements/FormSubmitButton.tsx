import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const FormSubmitButton = ({ title, onPress, disabled, style }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, disabled && styles.disabled, style]}
        onPress={onPress}
        activeOpacity={0.7}
        disabled={disabled}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#cbf950', // Replace with your primary color
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 25,
    textAlign: 'center',
    elevation: 3, // Adds a bit of shadow on Android
  },
  text: {
    fontSize: 18,
    color: '#000000',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: '#ccc', // Gray out the button when disabled
  },
});

export default FormSubmitButton;
