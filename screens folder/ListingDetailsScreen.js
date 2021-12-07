import React from 'react';
import {Image, View, StyleSheet} from "react-native-web";

const ListingDetailsScreen = () => {
    return (
        <View>
    <Image  style={styles.image} source={require('../assets/jacket.jpg')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    }
})


export default ListingDetailsScreen;
