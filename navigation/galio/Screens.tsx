import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Block } from "../../components/argon/galio-framework";

// screens
import {
  Article,
  ArticleCover,
  ArticleFeedV1,
  Cards,
  BaseComponents,
  Dashboard,
  OrderConfirmation,
} from "../../components/galio";
// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header } from "../../components/argon";
import { argonTheme, tabs } from "../../constants/argon";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function BaseComponentsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="BaseComponents"
        component={BaseComponents}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="BaseComponents"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function ArticleStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Article"
        component={Article}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Article" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function ArticleCoverStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="ArticleCover"
        component={ArticleCover}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="ArticleCover"
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ArticleFeedV1Stack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="ArticleFeedV1"
        component={ArticleFeedV1}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="ArticleFeedV1"
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function DashboardStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Dashboard"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function OrderConfirmationStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="OrderConfirmation"
        component={OrderConfirmation}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="OrderConfirmation"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function CardsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Cards"
        component={Cards}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Cards"
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

export {
  ArticleStack,
  ArticleCoverStack,
  ArticleFeedV1Stack,
  CardsStack,
  BaseComponentsStack,
  DashboardStack,
  OrderConfirmationStack,
};
