import styled from 'styled-components/native';
import { height, width } from '~constants/dimensions';
import { StyleSheet } from 'react-native';

export const Image = styled.Image`
    width: 100%;
    height: ${height * 0.3}px;
    object-fit: contain;
`;

export const RootContainer = styled.SafeAreaView`
    flex: 1;
    margin-left: 20px;
    margin-right: 20px;
    align-items: center;
`;

export const CenteredContainer = styled.SafeAreaView`
    align-items: center;
`;

export const styles = StyleSheet.create({
    textStyle: {
        width: width * 0.9,
    },

    titleStyle: {
        width: width * 0.8,
    },
});
