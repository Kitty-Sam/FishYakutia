import styled from 'styled-components/native';
import { theme } from '~constants/theme';
import { width } from '~constants/dimensions';

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${theme.BUTTON_COLOR};
    padding: 2% 2%;
    border-radius: 12px;
    align-items: center;
    width: ${width * 0.6}px;
`;

export const ButtonText = styled.Text`
    color: ${theme.BUTTON_TEXT_COLOR};
    font-family: 'Montserrat-SemiBold';
    font-size: 20px;
`;
