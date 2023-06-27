import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const LeftView = styled.View`
    margin-left: 20px;
    margin-right: 20px;
`;

export const RootContainer = styled.SafeAreaView`
    flex: 1;
`;

export const CenteredView = styled.View`
    align-items: center;
`;

export const RootContainerCentered = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    margin-bottom: 20px;
`;

export const RowContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ColumnContainer = styled.View`
    flex-direction: column;
    margin-left: 20px;
    margin-right: 20px;
`;
export const OkImage = styled.Image`
    width: 100px;
    height: 100px;
`;

export const SmileImage = styled.Image`
    width: 180px;
    height: 180px;
`;
export const stylesSuccess = StyleSheet.create({
    titleText: {
        textAlign: 'center',
        width: 200,
    },
    operatorText: {
        textAlign: 'center',
    },
    emptyBasketText: {
        width: 300,
        textAlign: 'center',
    },
});
