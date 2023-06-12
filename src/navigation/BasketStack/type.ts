import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum BasketStackNavigationName {
    ORDER = 'Заказ',
    DETAILS = 'Детали',
    SUCCESS = 'Успех',
}

export type BasketStackParamList = {
    [BasketStackNavigationName.ORDER]: undefined;
    [BasketStackNavigationName.DETAILS]: undefined;
    [BasketStackNavigationName.SUCCESS]: undefined;
};

export type OrderScreenProps = NativeStackScreenProps<BasketStackParamList, BasketStackNavigationName.ORDER>;
export type DetailsScreenProps = NativeStackScreenProps<BasketStackParamList, BasketStackNavigationName.DETAILS>;
