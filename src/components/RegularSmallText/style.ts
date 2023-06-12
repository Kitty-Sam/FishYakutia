import styled from 'styled-components/native';

export const Text = styled.Text<{ color: string }>`
    font-family: 'Montserrat-Regular';
    font-size: 16px;
    color: ${(props) => props.color};
`;
