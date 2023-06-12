import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BasketStackNavigationName, BasketStackParamList } from '~navigation/BasketStack/type';
import { OrderScreen } from '~screens/BasketsScreen/OrderScreen';
import { DetailsScreen } from '~screens/BasketsScreen/DetailsScreen';
import { SuccessScreen } from '~screens/BasketsScreen/SuccessScreen';

const Stack = createNativeStackNavigator<BasketStackParamList>();
export const BasketStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={BasketStackNavigationName.ORDER} component={OrderScreen} />
            <Stack.Screen name={BasketStackNavigationName.DETAILS} component={DetailsScreen} />
            <Stack.Screen name={BasketStackNavigationName.SUCCESS} component={SuccessScreen} />
        </Stack.Navigator>
    );
};
