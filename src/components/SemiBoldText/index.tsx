import React, { FC, PropsWithChildren } from 'react';
import { Text } from '~components/SemiBoldText/style';

export const SemiBoldText: FC<PropsWithChildren> = ({ children }) => {
    return <Text>{children}</Text>;
};
