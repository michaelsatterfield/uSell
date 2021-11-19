import React from "react";
import { Text, StyleSheet } from "react-native";

//Global use Text..Can be used for Headers or Whatever
//destructed
function AppText({ children }) {
    return <Text style={styles.text}>{children}</Text>;
}



//stylesheet

const styles = StyleSheet.create({
    text: {
        color: "tomato",
                fontSize: 20,
                fontFamily: "Avenir",
    },
});

export default AppText;
