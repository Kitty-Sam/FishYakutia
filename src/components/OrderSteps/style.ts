import styled from 'styled-components/native';
import { theme } from '~constants/theme';

export const Round = styled.View<{ bgColor: string }>`
    background-color: ${(props) => props.bgColor};
    width: 50px;
    height: 50px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`;

export const ColumnContainer = styled.View`
    flex-direction: column;
    align-items: center;
`;

export const RowContainer = styled.View`
    flex-direction: row;
`;

export const Line = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.SEPARATOR_COLOR};
    align-self: stretch;
    width: 25%;
    margin-bottom: 25px;
`;
