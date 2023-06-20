import React from 'react';
import { RegularText } from '~components/RegularText';
import { RootContainer } from '~screens/style';
import { Logo } from '~components/Logo';
import { theme } from '~constants/theme';
import { AppButton } from '~components/Button';
import { useNavigation } from '@react-navigation/native';
import { BasketStackNavigationName } from '~navigation/BasketStack/type';
import Icon from 'react-native-vector-icons/Ionicons';
import { getOrderNumber } from '~store/selectors';
import { useAppSelector } from '~store/store';
import { Platform } from 'react-native';
import { Gap } from '~components/Gap';

export const SuccessScreen = () => {
    const navigation = useNavigation<any>();
    const onClosePress = () => {
        navigation.navigate(BasketStackNavigationName.ORDER);
    };

    const orderNumber = useAppSelector(getOrderNumber);

    const onBackPress = () => {
        navigation.navigate(BasketStackNavigationName.DETAILS);
    };
    return (
        <RootContainer>
            {Platform.OS === 'android' && <Gap scale={0.5} />}
            <Logo />

            <RegularText color={theme.PRIMARY_COLOR} fontFamily="Montserrat-Medium" fontSize={32}>
                Заказ № {orderNumber} оформлен
            </RegularText>
            <Icon name="arrow-back" onPress={onBackPress} size={32} />
            <RegularText color={theme.SECONDARY_COLOR} fontFamily="Montserrat-Regular" fontSize={32}>
                Ожидайте звонка оператора
            </RegularText>
            <AppButton title="Спасибо" onPress={onClosePress} />
        </RootContainer>
    );
};
