import React, { FC } from 'react';
import { RegularText } from '~components/RegularText';
import { RootContainer } from '~screens/style';
import { Logo } from '~components/Logo';
import { MediumText } from '~components/MediumText';
import { BasketStackNavigationName, OrderScreenProps } from '~navigation/BasketStack/type';
import { AppButton } from '~components/Button';
import { RootStackNavigationName } from '~navigation/RootStack/type';
import { useNavigation } from '@react-navigation/native';

export const OrderScreen = () => {
    const navigation = useNavigation<any>();
    const onDetailsPress = () => {
        navigation.navigate(BasketStackNavigationName.DETAILS);
    };

    const onMenuPress = () => {
        navigation.navigate(RootStackNavigationName.MENU);
    };

    return (
        <RootContainer>
            <Logo />
            <MediumText>Корзина</MediumText>
            <RegularText color={'red'}>Order</RegularText>
            <AppButton title="Продолжить" onPress={onDetailsPress} />

            {/*<Icon name="emoji-sad" size={250} />*/}
            {/*<Gap scale={2} />*/}
            {/*<RegularText color={theme.SECONDARY_COLOR}>Ваша корзина пока пуста</RegularText>*/}
            {/*<Gap scale={4} />*/}
            {/*<AppButton title="Меню" onPress={onMenuPress} />*/}
        </RootContainer>
    );
};
