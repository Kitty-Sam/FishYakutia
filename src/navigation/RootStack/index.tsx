import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type';
import { MainScreen } from '~screens/MainScreen';
import { MenuScreen } from '~screens/MenuScreen';
import { BasketScreen } from '~screens/BasketScreen';
import { InfoScreen } from '~screens/InfoScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '~constants/theme';

export const Root = createBottomTabNavigator<RootStackParamList>();

export const RootStack = () => {
    return (
        <Root.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size }) => {
                    let iconName = 'home';

                    if (route.name === RootStackNavigationName.MAIN) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === RootStackNavigationName.MENU) {
                        iconName = focused ? 'book-sharp' : 'book-outline';
                    } else if (route.name === RootStackNavigationName.BASKET) {
                        iconName = focused ? 'basket' : 'basket-outline';
                    } else if (route.name === RootStackNavigationName.INFO) {
                        iconName = focused ? 'information-circle' : 'information-circle-outline';
                    }
                    return <Icon name={iconName} size={size} color={theme.TAB_BAR_COLOR} />;
                },
                tabBarLabelStyle: {
                    color: theme.SECONDARY_COLOR,
                    fontFamily: 'Montserrat-Thin',
                    fontSize: 12,
                },
                // tabBarStyle: {
                //     backgroundColor: theme.BUTTON_COLOR,
                // },

                headerShown: false,
            })}
        >
            <Root.Screen name={RootStackNavigationName.MAIN} component={MainScreen} />
            <Root.Screen name={RootStackNavigationName.MENU} component={MenuScreen} />
            <Root.Screen name={RootStackNavigationName.BASKET} component={BasketScreen} />
            <Root.Screen name={RootStackNavigationName.INFO} component={InfoScreen} />
        </Root.Navigator>
    );
};
