import styled from 'styled-components/native';
import { width } from '~constants/dimensions';
import { theme } from '~constants/theme';

export const FoodImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 10px;
`;

export const OrderItemContainer = styled.View`
    background-color: ${theme.WHITE};
    border-radius: 10px;
    margin-top: 20px;
    width: ${width * 0.9}px;
    flex-direction: row;
    padding: 15px;
    align-items: center;
    justify-content: space-between;
`;

export const ColumnContainer = styled.View`
    flex-direction: column;
    height: 50px;
    justify-content: space-around;
`;

export const RowContainer = styled.View`
    flex-direction: row;
    width: 100px;
    justify-content: space-around;
    align-items: center;
`;
