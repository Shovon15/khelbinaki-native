import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from './Drawer';

export default function Navbar() {
  const navigation = useNavigation();
  // const { user } = useAuth()
  return (
    <View
      style={{
        paddingVertical: 20,
        backgroundColor: 'red',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <Text>Navbar</Text>
    </View>
    // < Drawer
    //     screenOptions={{
    //         headerTitle: "",
    //         headerStyle: styles.navbar,
    //         headerLeft: () => (
    //             <Text
    //                 style={{ color: "white", marginLeft: 20 }}
    //             >
    //                 Logo
    //             </Text>
    //         ),
    //         headerRight: () => (
    //             <TouchableOpacity
    //                 onPress={() => {
    //                     navigation.dispatch(DrawerActions.toggleDrawer());
    //                 }}
    //                 style={[{ marginRight: 20 }]}
    //             >
    //                 <Ionicons name="menu" size={24} color={"white"} />
    //             </TouchableOpacity>
    //         ),
    //     }
    //     }
    //     drawerContent={(props:any) => <CustomDrawerContent {...props} />}
    // />
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'red',
  },
});
