import React, { FC } from 'react';
import { View } from 'react-native';

export interface IGap {
    scale: number;
}

export const Gap: FC<IGap> = ({ scale }) => {
    return <View style={{ height: scale * 10 }} />;
};
