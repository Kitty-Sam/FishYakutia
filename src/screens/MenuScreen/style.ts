import styled from 'styled-components/native';
import { theme } from '~constants/theme';

export const SearchBar = styled.TextInput`
    width: 90%;
    background-color: ${theme.BUTTON_TEXT_COLOR};
    border-radius: 5px;
    padding: 10px 15px 10px 20px;
    color: ${theme.SECONDARY_COLOR};
    font-family: 'Montserrat-Regular';
`;

export const CategoryContainer = styled.TouchableOpacity`
    border-radius: 9px;
    margin: 4px;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
`;

export const CategoriesContainer = styled.View`
    margin-top: 15px;
`;

export const CategoryText = styled.Text`
    font-family: 'Montserrat-Regular';
    font-size: 12px;
    color: ${theme.BUTTON_TEXT_COLOR};
`;
