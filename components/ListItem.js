import React from 'react';
import {View, StyleSheet, Image} from "react-native";
import AppText from "./AppText";




function ListItem({image, title, subtitle}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image}  source={image} />
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subtitle}</AppText>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container:  {
        flexDirection: "row",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10

    },
    subTitle: {
          color: '#6e6969'
    },
    title: {
       fontWeight: "500",
    }
})

export default ListItem;
