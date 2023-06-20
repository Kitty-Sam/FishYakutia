import React, { FC } from 'react';
import { RegularText } from '~components/RegularText';
import { RootContainer } from '~screens/style';
import { Logo } from '~components/Logo';
import { BasketStackNavigationName, DetailsScreenProps } from '~navigation/BasketStack/type';
import { AppButton } from '~components/Button';
import { theme } from '~constants/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppDispatch, useAppSelector } from '~store/store';
import { clearBasket } from '~store/slices/basketSlice';
import { useCreateOrderMutation } from '~store/api/foodApi';
import { getOrderItems } from '~store/selectors';
import { clearBadgeCount } from '~store/slices/foodSlice';
import { Platform, TextInput } from 'react-native';
import { Gap } from '~components/Gap';

export const DetailsScreen: FC<DetailsScreenProps> = ({ navigation }) => {
    const dispatch = useAppDispatch();
    const orderItems = useAppSelector(getOrderItems);

    const [createOrder] = useCreateOrderMutation();

    const totalPrice = orderItems.reduce((acc, obj) => acc + Number(obj.foodPrice) * obj.foodCount, 0);

    const onOrderPress = async () => {
        await createOrder({
            userName: 'Olga',
            userPhone: '123',
            userAddress: 'Minsk',
            totalAmount: String(totalPrice),
            orderItems,
        }).unwrap();

        navigation.navigate(BasketStackNavigationName.SUCCESS);
        dispatch(clearBasket());
        dispatch(clearBadgeCount());
    };

    const onBackPress = () => {
        navigation.navigate(BasketStackNavigationName.ORDER);
    };
    return (
        <RootContainer>
            {Platform.OS === 'android' && <Gap scale={0.5} />}
            <Logo />
            <RegularText color={theme.PRIMARY_COLOR} fontFamily="Montserrat-Medium" fontSize={32}>
                Корзина
            </RegularText>
            <Icon name="arrow-back" onPress={onBackPress} size={32} />
            <RegularText color={theme.SECONDARY_COLOR} fontFamily="Montserrat-Regular" fontSize={32}>
                Details
            </RegularText>
            <TextInput placeholder="имя" />
            <TextInput placeholder="телефон" />
            <TextInput placeholder="адрес доставки" />
            <AppButton title="Оформить" onPress={onOrderPress} />
        </RootContainer>
    );
};
