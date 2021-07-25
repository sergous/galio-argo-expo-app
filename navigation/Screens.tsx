import React from "react";
import { Easing, Animated, Dimensions } from "react-native";
const { width } = Dimensions.get("screen");
import { Block } from "../components/argon/galio-framework";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// drawer
import CustomDrawerContent from "./Menu";

import {
  HomeStack,
  ProfileStack,
  RegisterStack,
  OnboardingStack,
  ElementsStack,
  ArticlesStack,
} from "./argon/Screens";
import Onboarding from "../components/argon/screens/Onboarding";

// galio screens
import {
  ArticleStack,
  ArticleCoverStack,
  ArticleFeedV1Stack,
  CardsStack,
  BaseComponentsStack,
  DashboardStack,
  OrderConfirmationStack,
} from "./galio/Screens";

export default function AppScreen(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Register" component={RegisterStack} />
      <Drawer.Screen name="Elements" component={ElementsStack} />
      <Drawer.Screen name="Articles" component={ArticlesStack} />
      <Drawer.Screen name="Onboarding" component={OnboardingStack} />

      <Drawer.Screen name="Article" component={ArticleStack} />
      <Drawer.Screen name="ArticleCover" component={ArticleCoverStack} />
      <Drawer.Screen name="ArticleFeedV1" component={ArticleFeedV1Stack} />
      <Drawer.Screen name="Cards" component={CardsStack} />
      <Drawer.Screen name="BaseComponents" component={BaseComponentsStack} />
      <Drawer.Screen name="Dashboard" component={DashboardStack} />
      <Drawer.Screen
        name="OrderConfirmation"
        component={OrderConfirmationStack}
      />
    </Drawer.Navigator>
  );
}
