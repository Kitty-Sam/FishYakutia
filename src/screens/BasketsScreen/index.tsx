import React, { FC } from 'react';
import { MediumText } from '~components/MediumText';
import { Logo } from '~components/Logo';
import { RootContainer } from '~screens/style';
import Icon from 'react-native-vector-icons/Entypo';
import { AppButton } from '~components/Button';
import { BasketScreenProps, RootStackNavigationName } from '~navigation/RootStack/type';
import { RegularText } from '~components/RegularText';
import { Gap } from '~components/Gap';
import { theme } from '~constants/theme';

export const BasketScreen: FC<BasketScreenProps> = ({ navigation }) => {
    const onMenuPress = () => {
        navigation.navigate(RootStackNavigationName.MENU);
    };
    return (
        <RootContainer>
            <Logo />
            <MediumText>Корзина</MediumText>
            <Gap scale={2} />
            <Icon name="emoji-sad" size={250} />
            <Gap scale={2} />
            <RegularText color={theme.SECONDARY_COLOR}>Ваша корзина пока пуста</RegularText>
            <Gap scale={4} />
            <AppButton title="Меню" onPress={onMenuPress} />
        </RootContainer>
    );
};
