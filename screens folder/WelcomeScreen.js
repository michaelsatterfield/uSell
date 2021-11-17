import React from "react";
import {ImageBackground, View, StyleSheet, Text, Image} from "react-native";

import colors from "../app/config/colors";
import AppButton from "../components/AppButton";
import ViewabilityHelper from "react-native-web/dist/vendor/react-native/ViewabilityHelper";

const bgImage = require("../app/assets/background.jpg");

const WelcomeScreen = () => {
    return (
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
                <Text style={styles.text}>IMG APP</Text>
            </View>

          <View style={styles.buttonsContainer}>
                <AppButton title="Login" color={"primary"}/>
                <AppButton title={"Register"} color="secondary"/>
          </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
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
    buttonsContainer: {
        width: "100%",
        padding: 20,
    },
    text: {
        fontFamily: "roboto",
    },
});

export default WelcomeScreen;
