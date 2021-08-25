import React from "react";
import { ImageBackground, View, StyleSheet, Text } from "react-native";

import colors from "../app/config/colors";

const bgImage = require("../app/assets/chair.jpg");

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />

      <View style={styles.deleteIcon} />

      <ImageBackground
        source={bgImage}
        resizeMode="contain"
        style={styles.image}
      >
        <Text style={styles.text}>uSell</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    position: "absolute",
    top: 15,
    left: "10%",
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    position: "absolute",
    top: 15,
    right: "10%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: colors.black,
  },
});

export default ViewImageScreen;
