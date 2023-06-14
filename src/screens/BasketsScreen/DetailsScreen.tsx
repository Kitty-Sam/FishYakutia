import React, { FC } from 'react';
import { RegularText } from '~components/RegularText';
import { RootContainer } from '~screens/style';
import { Logo } from '~components/Logo';
import { BasketStackNavigationName, DetailsScreenProps } from '~navigation/BasketStack/type';
import { AppButton } from '~components/Button';
import { theme } from '~constants/theme';

export const DetailsScreen: FC<DetailsScreenProps> = ({ navigation }) => {
    const onOrderPress = () => {
        navigation.navigate(BasketStackNavigationName.SUCCESS);
    };
    return (
        <RootContainer>
            <Logo />
            <RegularText color={theme.PRIMARY_COLOR} fontFamily="Montserrat-Medium" fontSize={32}>
                Корзина
            </RegularText>
            <RegularText color={theme.SECONDARY_COLOR} fontFamily="Montserrat-Regular" fontSize={32}>
                Details
            </RegularText>
            <AppButton title="Оформить" onPress={onOrderPress} />
        </RootContainer>
    );
};
