import React from 'react'
import {ImageBackground, View, StyleSheet, Text, Image} from 'react-native'

import colors from '../app/config/colors'
import AppButton from '../components/AppButton'
import ViewabilityHelper from 'react-native-web/dist/vendor/react-native/ViewabilityHelper'

const bgImage = require('../app/assets/background.jpg')

const WelcomeScreen = () => {
    return (
        <ImageBackground
            blurRadius={10}
            source={bgImage}
            resizeMode="cover"
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../app/assets/img-logo.png')}
                />
                <Text style={styles.tagline}>Creatively Built</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton title="Login" color={'primary'}/>
                <AppButton title={'Register'} color="secondary"/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 100,
        alignItems: 'center',
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,


    },
    buttonsContainer: {
        width: '100%',
        padding: 20,
    },
    text: {
        fontFamily: 'roboto',
    },
})

export default WelcomeScreen
