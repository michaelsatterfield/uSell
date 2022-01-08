import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";



const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../app/assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../app/assets/mosh.jpg')
    }
]

const MessageScreen = () => {
    return (
     <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) =>
                    <ListItem
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                    />
                }
                ItemSeparatorComponent={() =>
                    <View style={{ width: "100", height: 1, backgroundColor: "#000"}} /> }
            />
     </Screen>
    );
};


const styles = StyleSheet.create({

});



export default MessageScreen;
