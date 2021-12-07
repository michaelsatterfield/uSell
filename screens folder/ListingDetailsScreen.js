import React from 'react';
import {Image, View, StyleSheet}  from 'react-native';
import AppText from "../components/AppText";

const ListingDetailsScreen = () => {
    return (
        <View>
    <Image style={styles.image} source={require('../app/assets/jacket.jpg')}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.tile}>Red jacket for sale</AppText>
            <AppText>$100</AppText>
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
    title: {

    }
})


export default ListingDetailsScreen;
