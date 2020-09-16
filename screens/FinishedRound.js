import React from 'react';
import {Text, View} from 'react-native';

export default function ProfileScreen(props) {
    let {cards} = props

    return (
        <View>
            <Text>{cards}</Text>
        </View>
    )
}