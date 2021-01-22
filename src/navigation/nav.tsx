import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text} from "react-native";
import { PhotosFeed } from "../../src/features/PhotosFeed/PhotosFeed";

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>photo-app</Text>
      <PhotosFeed />
      </View>
    );
  }
  
  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      </View>
    );
  }
  
  const Drawer = createDrawerNavigator();
export const Nav = () => {
    return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
}
const styles = StyleSheet.create({
    tinyLogo: {
      marginTop: 15,
      marginLeft: 40,
      width: 300,
      height: 300,
    },
    title: {
        fontSize: 30,
        padding: 15,
        marginTop:80
      },
})