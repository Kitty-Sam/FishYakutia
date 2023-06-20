import React, { FC } from 'react';
import { ButtonContainer, ButtonText } from '~components/RoundButton/style';

export interface IButton {
    title: string;
    onPress: any;
}

export const RoundButton: FC<IButton> = ({ title, onPress }) => {
    return (
        <ButtonContainer onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    );
};
