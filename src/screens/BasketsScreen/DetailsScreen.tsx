import React, { FC } from 'react';
import { RegularText } from '~components/RegularText';
import { Logo } from '~components/Logo';
import { BasketStackNavigationName, DetailsScreenProps } from '~navigation/BasketStack/type';
import { theme } from '~constants/theme';
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

    const onOrderPress = async (
        name: string,
        phone: string,
        address: string,
        comment: string,
        paymentMethod: string,
    ) => {
        await createOrder({
            userName: name,
            userPhone: phone,
            userAddress: address,
            paymentMethod: paymentMethod,
            comment: comment,
            totalAmount: String(totalPrice),
            orderItems,
        }).unwrap();

        navigation.navigate(BasketStackNavigationName.SUCCESS);
        dispatch(clearBasket());
        dispatch(clearBadgeCount());
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

            <Gap scale={2} />

            <RootContainerCentered>
                <Form onOrderPress={onOrderPress} />
            </RootContainerCentered>
        </RootContainer>
    );
};
