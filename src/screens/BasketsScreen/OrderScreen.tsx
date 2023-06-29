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
    RootContainer,
    RootContainerCentered,
    RowContainer,
    SmileImage,
    stylesSuccess,
} from '~screens/BasketsScreen/style';
import { Gap } from '~components/Gap';
import { getOrderItems } from '~store/selectors';
import { useAppDispatch, useAppSelector } from '~store/store';
import { Platform, ScrollView, View } from 'react-native';
import { OrderItem } from '~components/OrderItem';
import { clearBasket } from '~store/slices/basketSlice';
import { clearBadgeCount } from '~store/slices/foodSlice';
import { OrderSteps } from '~components/OrderSteps';
import { height, width } from '~constants/dimensions';

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

    // const renderOrderItem = useCallback(
    //     ({
    //         item,
    //     }: {
    //         item: { foodId: number; foodCount: number; foodImage: string; foodPrice: string; foodName: string };
    //     }) => <OrderItem food={item} />,
    //     [],
    // );

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
                    <View style={{ height: height * 0.55 }}>
                        <ScrollView
                            contentContainerStyle={{ width: width, alignItems: 'center' }}
                            showsVerticalScrollIndicator={false}
                        >
                            {orderItems.map((order) => (
                                <OrderItem food={order} key={order.foodName} />
                            ))}
                            <Gap scale={1.5} />
                            <AppButton title={`Продолжить ${totalPrice} ₽`} onPress={onDetailsPress} />
                            <Gap scale={2} />
                        </ScrollView>
                    </View>
                </RootContainer>
            )}
        </RootContainer>
    );
};
