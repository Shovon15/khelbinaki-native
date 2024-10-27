import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        Copyright © all rights reserved by Sheehan Ventures
      </Text>
      <Text style={styles.text}>
        Made with <Text style={styles.heart}>🤍</Text> by Antopolis
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    position: 'absolute',
    bottom: 0,
  },
  text: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center',
  },
  heart: {
    color: '#ff69b4', // Optional: style the heart emoji with a specific color
  },
});

export default Footer;
