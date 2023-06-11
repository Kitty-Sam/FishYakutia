import React from 'react';
import { MediumText } from '~components/MediumText';
import { Logo } from '~components/Logo';
import { RootContainer } from '~screens/style';

export const BasketScreen = () => {
    return (
        <RootContainer>
            <Logo />
            <MediumText>Корзина</MediumText>
        </RootContainer>
    );
};
