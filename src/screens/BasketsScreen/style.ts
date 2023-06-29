import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { height, width } from '~constants/dimensions';

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

export const RootContainerCentered = styled.View`
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

export const ListContainer = styled.View`
    height: ${height * 0.55}px;
`;

export const GapContainer = styled.View`
    height: ${height * 0.2}px;
`;

export const stylesSuccess = StyleSheet.create({
    titleText: {
        textAlign: 'center',
        width: width * 0.8,
    },
    operatorText: {
        textAlign: 'center',
    },
    emptyBasketText: {
        width: width * 0.9,
        textAlign: 'center',
    },
    contentContainer: {
        width: width,
        alignItems: 'center',
    },
});
