import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export enum RootStackNavigationName {
    MAIN = 'Главная',
    MENU = 'Меню',
    BASKET = 'Корзина',
    INFO = 'Информация',
}

export type RootStackParamList = {
    [RootStackNavigationName.MAIN]: undefined;
    [RootStackNavigationName.MENU]: undefined;
    [RootStackNavigationName.BASKET]: undefined;
    [RootStackNavigationName.INFO]: undefined;
};

export type MainScreenProps = BottomTabScreenProps<RootStackParamList, RootStackNavigationName.MAIN>;
