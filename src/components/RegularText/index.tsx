import React, { FC } from 'react';
import { Text } from '~components/RegularText/style';

interface IRegularText {
    color: string;
    fontSize: number;
    fontFamily: string;
    children: any;
    style?: any;
}

export const RegularText: FC<IRegularText> = ({ children, color, fontSize, fontFamily, style }) => {
    return (
        <Text color={color} fontSize={fontSize} fontFamily={fontFamily} style={style}>
            {children}
        </Text>
    );
};
