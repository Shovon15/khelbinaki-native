import PrimaryButton from '@/components/partials/elements/PrimaryButton';
import ScreenContainer from '@/components/partials/elements/ScreenContainer';
import BaseLayout from '@/components/partials/layouts/BaseLayout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Toast } from 'toastify-react-native';

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    const checkMatchId = async () => {
      try {
        const matchId = await AsyncStorage.getItem('matchId');

        if (matchId) {
          const parsedMatchId = JSON.parse(matchId);
          console.log(matchId, 'matchid');
          router.navigate(`/${parsedMatchId}`, { id: parsedMatchId });
        }
      } catch (error) {
        console.error('Error fetching matchId:', error);
      }
    };

    checkMatchId();
  }, []);

  return (
    <BaseLayout>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'white',
        }}
      >
        <Text style={styles.text}>
          Please Checkout Your Email To Get Match Information.
        </Text>
      </View>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
