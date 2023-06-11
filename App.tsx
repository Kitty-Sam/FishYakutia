import React from 'react';
import { RootStack } from '~navigation/RootStack';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
};
