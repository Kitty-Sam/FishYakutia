import React from 'react';
import { RegularText } from '~components/RegularText';
import { RootContainer } from '~screens/style';
import { Logo } from '~components/Logo';
import { MediumText } from '~components/MediumText';
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
            <MediumText>Заказ № 435 оформлен</MediumText>
            <RegularText color={theme.SECONDARY_COLOR}>Ожидайте звонка оператора</RegularText>
            <AppButton title="Спасибо" onPress={onClosePress} />
        </RootContainer>
    );
};
