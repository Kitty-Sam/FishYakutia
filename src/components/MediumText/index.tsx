import React, { FC, PropsWithChildren } from 'react';
import { Text } from '~components/MediumText/style';

export const MediumText: FC<PropsWithChildren> = ({ children }) => {
    return <Text>{children}</Text>;
};
