import React from "react";
import { Dimensions, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// galio components

import {
  Text,
  Button,
  Card,
  NavBar,
  Input,
  Icon,
  Block,
} from "./galio-framework";
import theme from "../../constants/theme";

const { width } = Dimensions.get("window");

export default class Components extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <Block>
          <Card
            flex
            borderless
            shadowColor={theme.COLORS.BLACK}
            style={styles.card}
            title="Christopher Moon"
            caption="139 minutes ago"
            location="Los Angeles, CA"
            avatar="http://i.pravatar.cc/100?id=pineaple"
            imageBlockStyle={styles.cardNoRadius}
            image="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?w=840&q=300"
          />

          <Card
            flex
            borderless
            shadowColor={theme.COLORS.BLACK}
            style={styles.card}
            title="Christopher Moon"
            caption="139 minutes ago"
            location="Los Angeles, CA"
            avatar="http://i.pravatar.cc/100?id=skater"
            imageStyle={styles.cardImageRadius}
            imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
            image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
          />

          <Card
            flex
            borderless
            shadowColor={theme.COLORS.BLACK}
            style={styles.card}
            title="Christopher Moon"
            titleColor={theme.COLORS.WHITE}
            caption="139 minutes ago"
            avatar="http://i.pravatar.cc/100?id=skater"
            footerStyle={styles.cardFull}
            imageStyle={{ height: theme.SIZES.BASE * 13.75 }}
            image="https://images.unsplash.com/photo-1506321806993-0e39f809ae59?&w=1200&h=1200&fit=crop&crop=entropy&q=300"
          >
            <LinearGradient
              colors={["transparent", "rgba(0,0,0, 0.8)"]}
              style={styles.cardGradient}
            />
          </Card>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    justifyContent: "flex-start",
    backgroundColor: theme.COLORS.WHITE,
  },
  button: {
    marginBottom: 20,
  },
  cards: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  card: {
    borderWidth: 0,
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
  },
  cardFooter: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: theme.SIZES.BASE / 2,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE / 2,
    backgroundColor: theme.COLORS.TRANSPARENT,
  },
  cardNoRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardAvatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  cardTitle: {
    justifyContent: "center",
    paddingLeft: theme.SIZES.BASE / 2,
  },
  cardImageContainer: {
    borderWidth: 0,
    overflow: "hidden",
  },
  cardImageRadius: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  cardImage: {
    width: "auto",
    height: theme.SIZES.BASE * 12.5,
  },
  cardRounded: {
    borderRadius: theme.SIZES.BASE * 0.5,
  },
  cardFull: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  cardGradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: "absolute",
    overflow: "hidden",
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
});
