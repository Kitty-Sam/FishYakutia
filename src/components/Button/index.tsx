import React, { FC } from 'react';
import { ButtonContainer, ButtonText } from '~components/Button/style';

export interface IButton {
    title: string;
    onPress: any;
}

export const AppButton: FC<IButton> = ({ title, onPress }) => {
    return (
        <ButtonContainer onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    );
};
