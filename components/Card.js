import React from 'react';
import {View, StyleSheet, Image} from "react-native-web";

import colors from "../app/config/colors";
import AppText from "./AppText/AppText";

const Card = (title, subTitle, Image) => {
    return (
        <View style={styles.card}>
            <Image source={require(image)} />
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
