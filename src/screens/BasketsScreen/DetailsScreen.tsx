import React, { FC } from 'react';
import { RegularText } from '~components/RegularText';
import { RootContainer } from '~screens/style';
import { Logo } from '~components/Logo';
import { MediumText } from '~components/MediumText';
import { BasketStackNavigationName, DetailsScreenProps } from '~navigation/BasketStack/type';
import { AppButton } from '~components/Button';

export const DetailsScreen: FC<DetailsScreenProps> = ({ navigation }) => {
    const onOrderPress = () => {
        navigation.navigate(BasketStackNavigationName.SUCCESS);
    };
    return (
        <RootContainer>
            <Logo />
            <MediumText>Корзина</MediumText>
            <RegularText color={'red'}>Details</RegularText>
            <AppButton title="Оформить" onPress={onOrderPress} />
        </RootContainer>
    );
};
