import React, { FC } from 'react';
import { ButtonContainer, ButtonText } from '~components/Buttons/SquareButton/style';

export interface IButton {
    title: string;
    onPress: any;
}

export const SquareButton: FC<IButton> = ({ title, onPress }) => {
    return (
        <ButtonContainer onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    );
};
