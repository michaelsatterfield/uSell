import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

//Global use Text..Can be used for Headers or Whatever
//destructed
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}



//stylesheet

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    //spread operator....spreads the objects properties into the parent object
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: " Avenir"
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto"
      },
    }),

  },
});

export default AppText;
