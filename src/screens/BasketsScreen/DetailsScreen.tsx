import React, { FC } from 'react';
import { RegularText } from '~components/RegularText';
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
import { Platform } from 'react-native';
import { Gap } from '~components/Gap';
import { OrderSteps } from '~components/OrderSteps';
import {
    CenteredView,
    LeftView,
    RootContainer,
    RootContainerCentered,
    RowContainer,
} from '~screens/BasketsScreen/style';
import { Form } from '~components/Form';

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

    const onClearPress = () => {
        dispatch(clearBasket());
        dispatch(clearBadgeCount());
        navigation.navigate(BasketStackNavigationName.ORDER);
    };

    return (
        <RootContainer>
            <CenteredView>
                {Platform.OS === 'android' && <Gap scale={0.5} />}
                <Logo />
            </CenteredView>
            <Gap scale={1.5} />
            <LeftView>
                <RegularText color={theme.PRIMARY_COLOR} fontFamily="Montserrat-Medium" fontSize={32}>
                    Корзина
                </RegularText>
                <Gap scale={1} />
                <OrderSteps
                    detailsBgColor={theme.SECONDARY_COLOR}
                    detailsColor={theme.SECONDARY_COLOR}
                    orderColor={theme.PLACEHOLDER}
                    orderBgColor={theme.CATEGORY_COLOR}
                />
                <Gap scale={1} />
                <RowContainer>
                    <RegularText color={theme.PRIMARY_COLOR} fontFamily="Montserrat-Medium" fontSize={24}>
                        Заказ
                    </RegularText>

                    <RegularText
                        color={theme.ERROR_COLOR}
                        fontFamily="Montserrat-Medium"
                        fontSize={24}
                        onPress={onClearPress}
                    >
                        Очистить
                    </RegularText>
                </RowContainer>
            </LeftView>

            <Icon name="arrow-back" onPress={onBackPress} size={32} />
            <RootContainerCentered>
                <Form />
                <Gap scale={2} />
                <AppButton title="Оформить" onPress={onOrderPress} />
            </RootContainerCentered>
        </RootContainer>
    );
};
