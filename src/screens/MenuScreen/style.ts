import styled from 'styled-components/native';
import { theme } from '~constants/theme';
import { height, width } from '~constants/dimensions';

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

export const RootContainer = styled.SafeAreaView`
    flex: 1;
`;

export const CenteredView = styled.View`
    align-items: center;
    margin-left: -20px;
`;

export const FoodContainer = styled.View`
    padding: 10px 20px;
    height: ${height * 0.55}px;
`;

export const LeftMarginBlock = styled.View`
    margin-left: 20px;
`;

export const FoodItemContainer = styled.View`
    width: ${width * 0.4}px;
    background-color: ${theme.WHITE};
    border-radius: 20px;
    padding: 10px;
    margin-bottom: 25px;
`;

export const FoodImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 20px;
    align-self: center;
`;

export const PriceContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
