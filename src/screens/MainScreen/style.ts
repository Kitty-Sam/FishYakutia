import styled from 'styled-components/native';

//height: 287px;

export const Image = styled.Image`
    width: 100%;
    height: 250px;
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
