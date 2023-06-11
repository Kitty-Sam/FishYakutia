import styled from 'styled-components/native';

export const RootContainer = styled.SafeAreaView`
    flex: 1;
`;
export const Container = styled.TouchableOpacity`
    background-color: red;
    align-items: center;
    justify-content: space-evenly;
    height: 200px;
    margin-bottom: 30px;
    padding: 4px;
    width: 45%;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;
