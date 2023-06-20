import React, { FC } from 'react';
import { Text } from '~components/RegularText/style';

interface IRegularText {
    color: string;
    fontSize: number;
    fontFamily: string;
    children: any;
    style?: any;
    onPress?: any;
}

export const RegularText: FC<IRegularText> = ({ children, color, fontSize, fontFamily, style, onPress }) => {
    return (
        <Text color={color} fontSize={fontSize} fontFamily={fontFamily} style={style} onPress={onPress}>
            {children}
        </Text>
    );
};
