// CustomDrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { notVisibleRoutes, privateRoute } from '@/constants/route';
// import { useAuth } from "@/contexts/hooks/useAuthContext";
// import Button from "../../element/Button";
// import Toast from "react-native-toast-message";
// import { notVisibleRoutes, privateRoute } from '@/constants/route';

function CustomDrawerContent(props: any) {
  const navigation = useNavigation();
  // const { user, logout } = useAuth()
  const user = null;
  const logout = () => {
    console.log('logout');
  };

  // console.log(props.state.routeNames
  //     .filter(
  //         (routeName: string) => {
  //             console.log('routeName', routeName)
  //             if (user && privateRoute.includes(routeName)) {
  //                 return true
  //             } else if (!user && !privateRoute.includes(routeName)) {
  //                 return true
  //             } else {
  //                 return false
  //             }
  //         }
  //     ))
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}
      >
        <View style={styles.container}>
          {props.state.routeNames
            .filter((routeName: string) => {
              if (
                !user &&
                !privateRoute.includes(routeName) &&
                !notVisibleRoutes.includes(routeName)
              ) {
                return true;
              } else {
                return false;
              }
            })
            .map((routeName: any, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate(routeName as never);
                  navigation.dispatch(DrawerActions.closeDrawer());
                }}
                style={styles.item}
              >
                <Text>{routeName === 'index' ? 'Home' : routeName}</Text>
              </TouchableOpacity>
            ))}
        </View>
        <View>
          {/* {user && <Button title="Log Out" onPress={logout} />} */}
          <Button title='Log Out' onPress={logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginVertical: 10,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});
export default CustomDrawerContent;
