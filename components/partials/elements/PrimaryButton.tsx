import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const PrimaryButton = ({ children, onPress }: any) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.button}
      >
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#cbf950',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },

  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});
