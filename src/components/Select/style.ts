import { StyleSheet } from 'react-native';
import { theme } from '~constants/theme';

export const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: theme.WHITE,
        borderRadius: 5,
        height: 40,
        width: '100%',
    },
    buttonTextStyle: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: theme.PRIMARY_COLOR,
        textAlign: 'left',
    },
    dropdownStyle: {
        borderRadius: 10,
    },
    rowTextStyle: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
    },
});
