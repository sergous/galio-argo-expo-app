/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import { Images } from "../constants/argon";
import useColorScheme from "../hooks/useColorScheme";
import ArgonApp from "../screens/ArgonApp";
import GalioApp from "../screens/GalioApp";
import { BottomTabParamList, TabTwoParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="ArgonDesign"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Argon"
        component={ArgonApp}
        options={{
          tabBarIcon: ({ color }) => (
            <Image style={{ width: 70, height: 20 }} source={Images.Logo} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Galio"
        component={GalioApp}
        options={{
          tabBarIcon: ({ color }) => (
            <img
              width={30}
              src={
                "https://raw.githubusercontent.com/galio-org/galio/master/assets/galio-logo.png"
              }
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
