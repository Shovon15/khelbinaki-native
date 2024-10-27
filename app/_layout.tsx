import Navbar from '@/components/partials/sections/Navbar';
import { Stack } from 'expo-router';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: screenHeight,
    display: 'flex',
  },
});
