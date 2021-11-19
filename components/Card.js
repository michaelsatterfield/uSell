import React from 'react';
import {View, StyleSheet, Image} from "react-native";

import colors from "../app/config/colors";
import AppText from "./AppText/AppText";

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image source={image} />
            <AppText>{title}</AppText>
            <AppText>{subTitle}</AppText>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        backgroundColor: colors.white,
        marginBottom: 20

    }

})

export default Card;
