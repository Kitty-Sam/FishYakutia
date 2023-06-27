import styled from 'styled-components/native';
import { theme } from '~constants/theme';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
`;

export const IconContainer = styled.View`
    border-radius: 5px;
    background-color: ${theme.WHITE};
    padding: 10px;
    margin-right: 20px;
`;

export const SearchBarInput = styled.TextInput`
    width: 80%;
    background-color: ${theme.BUTTON_TEXT_COLOR};
    border-radius: 5px;
    padding: 10px 15px 10px 20px;
    color: ${theme.SECONDARY_COLOR};
    font-family: 'Montserrat-Regular';
`;
