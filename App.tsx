import React from 'react';
import { RootStack } from '~navigation/RootStack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '~store/store';

export const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </Provider>
    );
};
