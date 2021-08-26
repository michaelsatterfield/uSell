import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

//Global use Text..Can be used for Headers or Whatever
//destructed
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

Platform.select({
  ios: {
    fontSize: 20,
    fontFamily: " Avenir",
  },
  android: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

//stylesheet

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
