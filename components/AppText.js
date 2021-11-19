import React from "react";
import {Platform, StyleSheet, Text} from "react-native";





//Global use Text..Can be used for Headers or Whatever
//destructed
function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",

  },
});



export default AppText;
