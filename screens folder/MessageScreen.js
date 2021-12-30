import React from 'react';
import {FlatList, SafeAreaView} from 'react-native'
import ListItem from "../components/ListItem"

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
        <SafeAreaView>
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
            />
        </SafeAreaView>
    );
};

export default MessageScreen;
