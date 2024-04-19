import styled from 'styled-components/native';

export const StyledText = styled.Text`
    color: ${props => props.color};
    font-size: ${props => props.size || 16}px;
    text-align: ${props => props.textAlign || 'auto'};
    font-weight: 500;
`;

