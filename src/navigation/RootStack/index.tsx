import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type';
import { MainScreen } from '~screens/MainScreen';
import { MenuScreen } from '~screens/MenuScreen';
import { InfoScreen } from '~screens/InfoScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '~constants/theme';
import { BasketStack } from '~navigation/BasketStack';
import { Badge } from '~components/Badge';
import { useAppSelector } from '~store/store';
import { getCurrentBadgeCount } from '~store/selectors';
import { styles } from '~navigation/RootStack/style';
import { View } from 'react-native';
import { height, width } from '~constants/dimensions';

export const Root = createBottomTabNavigator<RootStackParamList>();

export const RootStack = () => {
    const badge = useAppSelector(getCurrentBadgeCount);

    return (
        <View
            style={{
                width: width,
                height: height,
            }}
        >
            <Root.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName = 'home';

                        if (route.name === RootStackNavigationName.MAIN) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === RootStackNavigationName.MENU) {
                            iconName = focused ? 'book-sharp' : 'book-outline';
                        } else if (route.name === RootStackNavigationName.BASKET_STACK) {
                            iconName = focused ? 'basket' : 'basket-outline';
                        } else if (route.name === RootStackNavigationName.INFO) {
                            iconName = focused ? 'information-circle' : 'information-circle-outline';
                        }
                        return (
                            <>
                                <Icon name={iconName} size={24} color={theme.TAB_BAR_COLOR} />
                                {route.name === RootStackNavigationName.BASKET_STACK && badge > 0 && <Badge />}
                            </>
                        );
                    },
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIconStyle: styles.tabBarIconStyle,
                    tabBarStyle: styles.tabBarStyle,
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                })}
            >
                <Root.Screen name={RootStackNavigationName.MAIN} component={MainScreen} />
                <Root.Screen name={RootStackNavigationName.MENU} component={MenuScreen} />
                <Root.Screen name={RootStackNavigationName.BASKET_STACK} component={BasketStack} />
                <Root.Screen name={RootStackNavigationName.INFO} component={InfoScreen} />
            </Root.Navigator>
        </View>
    );
};
