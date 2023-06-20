import React from 'react';
import { useAppSelector } from '~store/store';
import { Text, View } from 'react-native';
import { getCurrentBadgeCount } from '~store/selectors';
import { theme } from '~constants/theme';

export const Badge = () => {
    const badge = useAppSelector(getCurrentBadgeCount);

    return (
        <View
            style={{
                width: 20,
                height: 20,
                alignItems: 'center',
                position: 'absolute',
                right: 20,
                top: 0,
                borderRadius: 10,
                backgroundColor: theme.BUTTON_COLOR,
                justifyContent: 'center',
            }}
        >
            <Text style={{ color: 'white' }}>{badge}</Text>
        </View>
    );
};
