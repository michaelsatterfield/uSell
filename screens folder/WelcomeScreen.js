import React from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";

const bgImage = require("../assets/background.jpg");

const WelcomeScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>uSell</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default WelcomeScreen;
