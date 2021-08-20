import React from "react";
import { ImageBackground, View, StyleSheet, Text } from "react-native";

// @ts-ignore
const bgImage = require("../app/assets/chair.jpg");

const ViewImageScreen = () => (
  <View style={styles.container}>
    <View
      style={{
        backgroundColor: "black",
        flex: 0.2,
      }}
    >
      <View
        style={{
          backgroundColor: "#fc5c65",
          width: 50,
          height: 50,
          left: 25,
        }}
      />

      <View
        style={{
          backgroundColor: "#4ECDC4",
          width: 50,
          height: 50,
          left: 25,
        }}
      />
    </View>

    <ImageBackground source={bgImage} resizeMode="contain" style={styles.image}>
      {/* <Text style={styles.text}>uSell</Text> */}
    </ImageBackground>

    <View />
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

export default ViewImageScreen;
