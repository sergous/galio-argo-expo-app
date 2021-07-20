import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import {
  Article,
  ArticleCover,
  ArticleFeedV1,
  Card,
  BaseComponents,
  Dashboard,
  OrderConfirmation,
} from "../components/galio";

export default function TabOneScreen() {
  // return <Article />;
  // return <ArticleCover />;
  // return <ArticleFeedV1 />;
  // return <Card />;
  // return <BaseComponents />;
  // return <OrderConfirmation />;
  return <Dashboard />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
