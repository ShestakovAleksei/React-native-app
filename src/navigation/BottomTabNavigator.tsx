import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PhotosFeed } from "../features/PhotosFeed/PhotosFeed";
import { Settings } from "../features/Settings/Settings";
import { Routes } from "./Routes";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Icon } from "../ui/Icon";

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="BottomNavigation" tabBarOptions={{ activeTintColor: Colors.dark.tabIconSelected }}>
      <BottomTab.Screen
        name={Routes.PhotosFeed}
        component={PhotosFeed}
        options={{
          title: "Photos",
          tabBarIcon: ({ color }) => <Icon />,
        }}
      />
      <BottomTab.Screen
        name={Routes.Settings}
        component={Settings}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Icon />,
        }}
      />
    </BottomTab.Navigator>
  );
};
