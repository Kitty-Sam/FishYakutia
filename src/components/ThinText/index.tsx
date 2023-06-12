import React, { FC, PropsWithChildren } from 'react';
import { Text } from '~components/ThinText/style';

export const ThinText: FC<PropsWithChildren> = ({ children }) => {
    return <Text>{children}</Text>;
};
