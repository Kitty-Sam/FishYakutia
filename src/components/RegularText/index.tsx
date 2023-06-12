import React, { FC } from 'react';
import { Text } from '~components/RegularText/style';

interface IRegularText {
    color: string;
    children: any;
}

export const RegularText: FC<IRegularText> = ({ children, color }) => {
    return <Text color={color}>{children}</Text>;
};
