import React from 'react';
import {Image, View, StyleSheet}  from 'react-native';
import AppText from "../components/AppText";


import colors from "../app/config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
    return (
        <View>
    <Image style={styles.image} source={require('../app/assets/jacket.jpg')}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Red jacket for sale</AppText>
            <AppText style={styles.price}>$100</AppText>

                <View style={styles.userContainer}>
                <ListItem
                    image={require("../app/assets/mosh.jpg")}
                    title="Mosh"
                    subtitle="5 Listings"
                />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
       marginVertical: 40,
    },
})


export default ListingDetailsScreen;
