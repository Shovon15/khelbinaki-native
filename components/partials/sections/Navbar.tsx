import React, { useEffect, useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from './Drawer';
import useAxiosGlobalInstance from '@/utils/hooks/useAxiosGlobalInstance';
import ImageWrapper from '../elements/ImageWrapper';
// import useAxiosGlobalInstance from '@/utils/hooks/useAxiosGlobalInstance';

export default function Navbar() {
  const navigation = useNavigation();
  const [logo, setLogo] = useState<string>('');
  // // const { user } = useAuth()
  const axiosGlobalInstance = useAxiosGlobalInstance();

  useEffect(() => {
    const getLogo = async () => {
      const { data } = await axiosGlobalInstance.get('global/logo');
      setLogo(data?.image);
    };
    getLogo();
  }, []);


  return (
    <View style={styles.container}>
      <ImageWrapper imgUrl={logo} style={styles.image} />

      {/* <Text>Navbar</Text> */}
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
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  navbar: {
    backgroundColor: 'red',
  },
  image: {
    width: 100,
    height: 40,
  },
});
