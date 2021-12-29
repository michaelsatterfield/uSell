import React from 'react';
import { FlatList } from 'react-native'

const messages =[
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
   <FlatList
       data={messages}
       keyExtractor={message => message.id.toString()}
       renderItem={}/>

    );
};

export default MessageScreen;
