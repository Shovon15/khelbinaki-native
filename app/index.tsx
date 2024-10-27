import PrimaryButton from '@/components/partials/elements/PrimaryButton';
import ScreenContainer from '@/components/partials/elements/ScreenContainer';
import { Link, useRouter } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Home screen.</Text>
        <PrimaryButton onPress={() => router.navigate('/login')}>
          Login
        </PrimaryButton>
      </View>
    </ScreenContainer>
  );
}
