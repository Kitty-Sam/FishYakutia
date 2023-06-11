import React, { FC, PropsWithChildren } from 'react';
import { Text } from '~components/RegularText/style';

export const RegularText: FC<PropsWithChildren> = ({ children }) => {
    return <Text>{children}</Text>;
};
