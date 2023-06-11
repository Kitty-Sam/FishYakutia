import styled from 'styled-components/native';
import { theme } from '~constants/theme';

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${theme.BUTTON_COLOR};
    padding: 15px 20px;
    border-radius: 12px;
    align-items: center;
    width: 70%;
`;

export const ButtonText = styled.Text`
    color: ${theme.BUTTON_TEXT_COLOR};
    font-family: 'Montserrat-SemiBold';
    font-size: 20px;
`;
