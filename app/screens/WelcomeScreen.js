import { ImageBackground, View, Text, Image, StyleSheet } from "react-native";

import colors from "../config/colors";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/app-hero-bg.webp")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/app-logo.webp")}
          style={styles.logo}
        />
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  logo: {
    width: 278,
    height: 90,
  },
  logoContainer: {
    position: "absolute",
    top: 160,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
