import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Headline({ text, colorText }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.colorText]}>{colorText}</Text>
        <Text style={styles.headlineText}>{text}</Text>
      </View>
      <View style={styles.border} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 24,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  colorText: {
    color: '#cbf950',
    fontWeight: '400',
  },
  headlineText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20, // Adjust the font size as needed
    position: 'relative',
  },
  border: {
    borderColor: '#cbf950',
    width: '100%',
    borderWidth: 2,
    borderRadius: 100,
    height: 4,
    marginTop: 8,
  },
});
