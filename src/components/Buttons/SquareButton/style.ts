import styled from 'styled-components/native';
import { theme } from '~constants/theme';

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${theme.BUTTON_COLOR};
    padding: 0 10px;
    border-radius: 10px;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: ${theme.BUTTON_TEXT_COLOR};
    font-family: 'Montserrat-SemiBold';
    font-size: 28px;
`;
