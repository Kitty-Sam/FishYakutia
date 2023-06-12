import React, { FC } from 'react';
import { Text } from '~components/RegularSmallText/style';

interface IRegularText {
    color: string;
    children: any;
}

export const RegularSmallText: FC<IRegularText> = ({ children, color }) => {
    return <Text color={color}>{children}</Text>;
};
