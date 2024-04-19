import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
    border-radius: 30px;
    background-color: ${props => props.buttonColor};
    
`;

export const StyledText = styled.Text`
    color: ${props => props.color};
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
`;
