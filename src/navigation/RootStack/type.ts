import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export enum RootStackNavigationName {
    MAIN = 'Главная',
    MENU = 'Меню',
    BASKET_STACK = 'Корзина',
    INFO = 'Информация',
}

export type RootStackParamList = {
    [RootStackNavigationName.MAIN]: undefined;
    [RootStackNavigationName.MENU]: undefined;
    [RootStackNavigationName.BASKET_STACK]: undefined;
    [RootStackNavigationName.INFO]: undefined;
};

export type MainScreenProps = BottomTabScreenProps<RootStackParamList, RootStackNavigationName.MAIN>;
export type MenuScreenProps = BottomTabScreenProps<RootStackParamList, RootStackNavigationName.MENU>;
export type BasketScreenProps = BottomTabScreenProps<RootStackParamList, RootStackNavigationName.BASKET_STACK>;
