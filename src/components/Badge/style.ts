import styled from 'styled-components/native';
import { theme } from '~constants/theme';

export const Container = styled.View`
    width: 20px;
    height: 20px;
    align-items: center;
    position: absolute;
    right: 20px;
    top: 0;
    border-radius: 10px;
    background-color: ${theme.BUTTON_COLOR};
    justify-content: center;
`;
