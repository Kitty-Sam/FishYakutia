import styled from 'styled-components/native';
import { theme } from '~constants/theme';

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${theme.BUTTON_COLOR};
    width: 30px;
    height: 30px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: ${theme.BUTTON_TEXT_COLOR};
    font-family: 'Montserrat-SemiBold';
    font-size: 16px;
`;
