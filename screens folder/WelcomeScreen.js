import React from "react";
import { ImageBackground, View, StyleSheet, Text, Image } from "react-native";

const bgImage = require("../app/assets/background.jpg");

const WelcomeScreen = () => (
  <ImageBackground
    source={bgImage}
    resizeMode="cover"
    style={styles.background}
  >
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require("../app/assets/logo-red.png")}
      />
      <Text>Sell Your Stuff</Text>
    </View>
    <View style={styles.loginButton}></View>
    <View style={styles.registerButton}></View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#fc5c65",
    width: "100%",
    height: 70,
  },
  registerButton: {
    backgroundColor: "#4ECDC4",
    width: "100%",
    height: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
