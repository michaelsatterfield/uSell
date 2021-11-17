import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";

import colors from "../app/config/colors";


function AppButton({title}) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: 'center',
        padding: 15,
        width: '100%'
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'


    }
})

export default AppButton;
