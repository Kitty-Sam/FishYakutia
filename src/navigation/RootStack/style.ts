import { Platform, StyleSheet } from 'react-native';
import { theme } from '~constants/theme';

export const styles = StyleSheet.create({
    tabBarLabelStyle: {
        color: theme.SECONDARY_COLOR,
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    tabBarStyle: {
        position: 'absolute',
        bottom: 10,
        borderRadius: 20,

        backgroundColor: theme.WHITE,
        ...Platform.select({
            ios: {
                shadowColor: theme.PRIMARY_COLOR,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 4,
                marginVertical: 10,
                marginHorizontal: 10,
                paddingHorizontal: 10,
                paddingVertical: 20,
                height: 100,
            },
            android: {
                elevation: 4,
                height: 90,
                marginVertical: 10,
                marginHorizontal: 10,
                paddingHorizontal: 10,
                paddingVertical: 20,
            },
        }),
    },
});
