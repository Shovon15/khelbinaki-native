import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import { format } from 'date-fns';
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';
// import { PiMapPinAreaLight, PiCalendarDots, PiClock } from 'react-icons/pi'; // Adjust as needed
// You might need to use react-native-vector-icons or SVGs for icons in Expo

export default function UpcomingGameInfo({ upcomingGame }: any) {
  return (
    <View style={styles.container}>
      {/* match name */}
      <Text style={styles.gameTitle}>
        {upcomingGame?.name ? upcomingGame.name : 'No Upcoming Game'}
      </Text>
      {upcomingGame && (
        <View style={styles.infoBox}>
          <View style={styles.section}>
            <View style={styles.iconRow}>
              <MaterialCommunityIcons
                name='map-marker'
                size={20}
                color='white'
              />
              <View style={styles.textColumn}>
                <Text style={styles.venueName}>
                  {upcomingGame?.venue?.name}
                </Text>
                <Text style={styles.venueAddress}>
                  {upcomingGame?.venue?.address}
                </Text>
                {upcomingGame?.venue?.location && (
                  <TouchableOpacity
                    onPress={() => Linking.openURL(upcomingGame.venue.location)}
                  >
                    <Text style={styles.mapLink}>View in map</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.iconRow}>
              <Feather name='calendar' size={20} color='white' />
              <View style={styles.textColumn}>
                <Text style={styles.venueDate}>
                  {upcomingGame?.date &&
                    format(new Date(upcomingGame.date), 'EEEE, dd MMMM yyyy')}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.iconRow}>
              <AntDesign name='clockcircleo' size={20} color='white' />
              <View style={styles.textColumn}>
                <Text style={styles.scheduleData}>
                  {upcomingGame?.schedule}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  gameTitle: {
    color: '#cbf950',
    fontSize: 32,
    textTransform: 'uppercase',
    paddingBottom: 10,
    fontWeight: '300',
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 16,
    borderRadius: 16,
    width: '100%',
    minWidth: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  section: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingVertical: 8,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textColumn: {
    flex: 1,
    color: 'white',
    paddingLeft: 16,
  },
  venueName: {
    fontWeight: '600',
    color: 'white',
  },
  venueDate: {
    fontWeight: '600',
    color: 'white',
  },
  venueAddress: {
    fontSize: 14,
    color: 'white',
  },
  scheduleData: {
    fontSize: 14,
    color: 'white',
  },
  mapLink: {
    fontSize: 14,
    color: 'white',
    textDecorationLine: 'underline',
  },
});
