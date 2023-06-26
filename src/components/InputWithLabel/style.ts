import styled from 'styled-components/native';
import { theme } from '~constants/theme';
import { width } from '~constants/dimensions';
import { StyleSheet } from 'react-native';

export const Container = styled.TouchableOpacity`
    flex-direction: column;
    width: ${0.9 * width}px;
    margin-bottom: 10px;
`;

export const CustomTextInput = styled.TextInput`
    padding: 10px 15px;
    background-color: ${theme.WHITE};
    border-radius: 5px;
    font-size: 14px;
    font-family: 'Montserrat-Regular';
    color: ${theme.PRIMARY_COLOR};
`;

export const styles = StyleSheet.create({
    phoneInputWIthMask: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: theme.WHITE,
        borderRadius: 5,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: theme.PRIMARY_COLOR,
    },
});
