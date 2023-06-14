import React from 'react';
import { RegularText } from '~components/RegularText';
import { RootContainer } from '~screens/style';
import { Logo } from '~components/Logo';
import { theme } from '~constants/theme';
import { AppButton } from '~components/Button';
import { useNavigation } from '@react-navigation/native';
import { BasketStackNavigationName } from '~navigation/BasketStack/type';

export const SuccessScreen = () => {
    const navigation = useNavigation<any>();
    const onClosePress = () => {
        navigation.navigate(BasketStackNavigationName.ORDER);
    };
    return (
        <RootContainer>
            <Logo />
            <RegularText color={theme.PRIMARY_COLOR} fontFamily="Montserrat-Medium" fontSize={32}>
                Заказ № 435 оформлен
            </RegularText>
            <RegularText color={theme.SECONDARY_COLOR} fontFamily="Montserrat-Regular" fontSize={32}>
                Ожидайте звонка оператора
            </RegularText>
            <AppButton title="Спасибо" onPress={onClosePress} />
        </RootContainer>
    );
};
