import React from 'react';
import { RegularText } from '~components/RegularText';

import { Logo } from '~components/Logo';
import { BasketStackNavigationName } from '~navigation/BasketStack/type';
import { AppButton } from '~components/Buttons/Button';
import { RootStackNavigationName } from '~navigation/RootStack/type';
import { useNavigation } from '@react-navigation/native';
import { theme } from '~constants/theme';
import {
    CenteredView,
    ColumnContainer,
    LeftView,
    ListContainer,
    RootContainer,
    RootContainerCentered,
    RowContainer,
    SmileImage,
    stylesSuccess,
} from '~screens/BasketsScreen/style';
import { Gap } from '~components/Gap';
import { getOrderItems } from '~store/selectors';
import { useAppDispatch, useAppSelector } from '~store/store';
import { Platform, ScrollView } from 'react-native';
import { OrderItem } from '~components/OrderItem';
import { clearBasket } from '~store/slices/basketSlice';
import { clearBadgeCount } from '~store/slices/foodSlice';
import { OrderSteps } from '~components/OrderSteps';

const smile = require('../../../assets/images/smile.png');

export const OrderScreen = () => {
    const navigation = useNavigation<any>();

    const orderItems = useAppSelector(getOrderItems);

    const dispatch = useAppDispatch();

    const onDetailsPress = () => {
        navigation.navigate(BasketStackNavigationName.DETAILS);
    };

    const onMenuPress = () => {
        navigation.navigate(RootStackNavigationName.MENU);
    };

    const onClearPress = () => {
        dispatch(clearBasket());
        dispatch(clearBadgeCount());
    };

    const totalPrice = orderItems.reduce((acc, obj) => acc + Number(obj.foodPrice) * obj.foodCount, 0);

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
            </LeftView>

            {!orderItems.length ? (
                <RootContainerCentered>
                    <SmileImage source={smile} />
                    <Gap scale={2} />
                    <RegularText
                        color={theme.SECONDARY_COLOR}
                        fontFamily="Montserrat-Regular"
                        fontSize={24}
                        style={stylesSuccess.emptyBasketText}
                    >
                        Ваша корзина пока пуста
                    </RegularText>
                    <Gap scale={4} />
                    <AppButton title="Меню" onPress={onMenuPress} />
                </RootContainerCentered>
            ) : (
                <RootContainer>
                    <ColumnContainer>
                        <Gap scale={1} />
                        <OrderSteps
                            orderBgColor={theme.SECONDARY_COLOR}
                            orderColor={theme.SECONDARY_COLOR}
                            detailsColor={theme.PLACEHOLDER}
                            detailsBgColor={theme.CATEGORY_COLOR}
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
                    </ColumnContainer>
                    <ListContainer>
                        <ScrollView
                            contentContainerStyle={stylesSuccess.contentContainer}
                            showsVerticalScrollIndicator={false}
                        >
                            {orderItems.map((order) => (
                                <OrderItem food={order} key={order.foodName} />
                            ))}
                            <Gap scale={1.5} />
                            <AppButton title={`Продолжить ${totalPrice} ₽`} onPress={onDetailsPress} />
                            <Gap scale={2} />
                        </ScrollView>
                    </ListContainer>
                </RootContainer>
            )}
        </RootContainer>
    );
};
