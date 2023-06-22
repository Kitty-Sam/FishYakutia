import React from 'react';
import { TextInput, View } from 'react-native';

export const Form = () => {
    return (
        <View>
            <TextInput placeholder="name" />
            <TextInput placeholder="phone" />
            <TextInput placeholder="address" />
            <TextInput placeholder="payment" />
            <TextInput placeholder="comment" />
        </View>
    );
};
