import React from "react";
import { ImageBackground, View, StyleSheet, Text } from "react-native";

const bgImage = require("../app/assets/background.jpg");

const WelcomeScreen = () => (
  <ImageBackground
    source={bgImage}
    resizeMode="cover"
    style={styles.background}
  >
    <View style={styles.loginButton}></View>
    <View style={styles.logoutButton}></View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    backgroundColor: "#fc5c65",
    flex: 0.1,
  },
  logoutButton: {
    backgroundColor: "#4ECDC4",
    flex: 0.1,
  },
});

export default WelcomeScreen;
