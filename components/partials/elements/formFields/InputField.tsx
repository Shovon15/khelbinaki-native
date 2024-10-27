import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';

const InputField = ({
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled,
  icon,
}: any) => {
  return (
    <View style={[styles.container, disabled && styles.disabled]}>
      <View style={styles.icon}>{icon}</View>
      <TextInput
        style={[
          styles.input,
          Platform.OS === 'web' && ({ outlineStyle: 'none' } as any),
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={type === 'password'}
        editable={!disabled}
        placeholderTextColor='#999'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    maxWidth: 300,
    marginHorizontal: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  icon: {
    paddingRight: 10,
    color: '#999',
    fontSize: 18,
  },
  input: {
    flex: 1,
    paddingLeft: 5,
    color: '#999',
    backgroundColor: 'transparent',
    fontSize: 16,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 0, // Ensure no outline or border appears when focused
  },
  disabled: {
    opacity: 0.5,
  },
});

export default InputField;
