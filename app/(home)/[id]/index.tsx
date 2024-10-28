import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import BaseLayout from '@/components/partials/layouts/BaseLayout';
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAxiosInstance from '@/utils/hooks/useAxiosInstance';
import UpcomingGameInfo from '@/components/partials/elements/home/upcomingGame/UpcomingGame';
import Headline from '@/components/partials/elements/Headline';

const MatchInfoScreen = () => {
  const [matchData, setMatchData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { id } = useLocalSearchParams<{ id: string }>();

  const axiosInstance = useAxiosInstance();

  useEffect(() => {
    const storeMatchId = async () => {
      if (id) {
        try {
          await AsyncStorage.setItem('matchId', JSON.stringify(id));
        } catch (error) {
          console.error('Error storing matchId:', error);
        }
      }
    };

    storeMatchId();
  }, [id]);

  const fetchMatchData = async (matchId: any) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`match/upcoming/${matchId}`);
      setMatchData(response.data);
    } catch (error) {
      console.error('Error fetching match data:', error);
      // setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatchData(id);
  }, [id]);

  // console.log(matchData, 'matchData');

  return (
    <BaseLayout>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Headline colorText='Check Out' text='Upcoming Game' />
        <UpcomingGameInfo upcomingGame={matchData} />
      </View>
    </BaseLayout>
  );
};

export default MatchInfoScreen;
