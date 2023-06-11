import React from 'react';
import { Text } from 'react-native';
import { RootContainer } from '~screens/style';
import { Logo } from '~components/Logo';

export const MainScreen = () => {
    return (
        <RootContainer>
            <Logo />
            <Text>Main</Text>
            <Text style={{ fontFamily: 'Montserrat-Medium' }}>Hello, React Native with Google Fonts!</Text>
            <Text style={{ fontFamily: 'Montserrat-Regular' }}>Hello, React Native with Google Fonts!</Text>
            <Text style={{ fontFamily: 'Montserrat-Bold' }}>Hello, React Native with Google Fonts!</Text>
            <Text style={{ fontFamily: 'Montserrat-SemiBold' }}>Hello, React Native with Google Fonts!</Text>
            <Text>Hello, React Native with Google Fonts!</Text>
        </RootContainer>
    );
};
