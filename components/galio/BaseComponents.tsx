import React from "react";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  Alert,
  Platform,
  TouchableOpacity,
  Linking,
} from "react-native";
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
        {/* Buttons examples using Button component */}
        <Block flex style={{ marginBottom: theme.SIZES.BASE }}>
          <Block flex style={{ padding: theme.SIZES.BASE }}>
            <Text h5>Buttons</Text>
          </Block>
          <Block flex center style={{ padding: theme.SIZES.BASE }}>
            <Button style={styles.button} round>
              Primary
            </Button>
            <Button color="info" style={styles.button} round>
              Info
            </Button>
            <Button style={styles.button} color="success" round>
              Success
            </Button>
            <Button color="warning" style={styles.button} round>
              Warning
            </Button>
            <Button color="error" style={styles.button} round>
              Error
            </Button>
          </Block>
        </Block>
        {/* Typography examples using Text component */}
        <Block flex style={{ marginBottom: theme.SIZES.BASE }}>
          <Block flex style={{ padding: theme.SIZES.BASE }}>
            <Text h5>Typography</Text>
          </Block>
          <Block style={{ padding: theme.SIZES.BASE }}>
            <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h1>
              Heading 1
            </Text>
            <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h2>
              Heading 2
            </Text>
            <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h3>
              Heading 3
            </Text>
            <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h4>
              Heading 4
            </Text>
            <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h5>
              Heading 5
            </Text>
            <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} p>
              Paragraph
            </Text>
            <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} p muted>
              This is a muted paragraph.
            </Text>
          </Block>
        </Block>
        {/* Inputs examples using Input component */}
        <Block flex>
          <Block flex style={{ padding: theme.SIZES.BASE }}>
            <Text h5>Inputs</Text>
          </Block>
          <Block style={{ padding: theme.SIZES.BASE }}>
            <Input rounded placeholder="placeholder" />
            <Input
              rounded
              placeholder="theme"
              placeholderTextColor={theme.COLORS.THEME}
              style={{ borderColor: theme.COLORS.THEME }}
            />
            <Input
              rounded
              placeholder="info"
              placeholderTextColor={theme.COLORS.INFO}
              style={{ borderColor: theme.COLORS.INFO }}
            />
            <Input
              rounded
              placeholder="warning"
              placeholderTextColor={theme.COLORS.WARNING}
              style={{ borderColor: theme.COLORS.WARNING }}
            />
            <Input
              rounded
              placeholder="error"
              placeholderTextColor={theme.COLORS.ERROR}
              style={{ borderColor: theme.COLORS.ERROR }}
            />
            <Input
              rounded
              placeholder="success"
              placeholderTextColor={theme.COLORS.SUCCESS}
              style={{ borderColor: theme.COLORS.SUCCESS }}
            />
            <Input rounded password viewPass placeholder="password" />
            <Input
              rounded
              icon="trophy"
              family="font-awesome"
              placeholder="icon right"
              right
            />
            <Input
              rounded
              borderless
              placeholder="borderless"
              placeholderTextColor={theme.COLORS.WHITE}
              color={theme.COLORS.WHITE}
              bgColor={theme.COLORS.THEME}
            />
          </Block>
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
