import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";



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
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}

            />
        </Screen>
    );
};


const styles = StyleSheet.create({

});



export default MessageScreen;
