import React from 'react';
import { RegularText } from '~components/RegularText';
import { RootContainer } from '~screens/style';
import { Logo } from '~components/Logo';
import { theme } from '~constants/theme';
import { AppButton } from '~components/Buttons/Button';
import { useNavigation } from '@react-navigation/native';
import { BasketStackNavigationName } from '~navigation/BasketStack/type';
import { getOrderNumber } from '~store/selectors';
import { useAppSelector } from '~store/store';
import { Platform } from 'react-native';
import { Gap } from '~components/Gap';
import { CenteredView, OkImage, stylesSuccess } from '~screens/BasketsScreen/style';

const ok = require('~constants/ok.png');

export const SuccessScreen = () => {
    const navigation = useNavigation<any>();
    const onClosePress = () => {
        navigation.navigate(BasketStackNavigationName.ORDER);
    };

    const orderNumber = useAppSelector(getOrderNumber);

    return (
        <RootContainer>
            <CenteredView>
                {Platform.OS === 'android' && <Gap scale={0.5} />}
                <Logo />
            </CenteredView>
            <Gap scale={1.5} />

            <RegularText
                color={theme.PRIMARY_COLOR}
                fontFamily="Montserrat-Medium"
                fontSize={32}
                style={stylesSuccess.titleText}
            >
                Заказ № {orderNumber} оформлен
            </RegularText>
            <Gap scale={2} />
            <OkImage source={ok} />
            <Gap scale={2} />
            <RegularText
                color={theme.SECONDARY_COLOR}
                fontFamily="Montserrat-Regular"
                fontSize={32}
                style={stylesSuccess.operatorText}
            >
                Ожидайте звонка от оператора.
            </RegularText>
            <Gap scale={3} />
            <AppButton title="Спасибо!" onPress={onClosePress} />
        </RootContainer>
    );
};
