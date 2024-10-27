import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AuthWrapper = ({ children, headerTitle }: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <Text style={styles.header}>{headerTitle}</Text>
        <View style={styles.content}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    overflow: 'hidden',
    width: '90%',
    marginHorizontal: 10,
  },
  header: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#000',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 25,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  content: {
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default AuthWrapper;
