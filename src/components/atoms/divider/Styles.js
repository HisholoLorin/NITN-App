import styled from 'styled-components/native';

export const HorizontalRule = styled.View`
    border-bottom-color: #E5E3E3;
    border-bottom-width: 1px;
    margin-top : ${props => props.top || "20"}px;
    margin-bottom : ${props => props.bottom  || "20"}px;
    marginHorizontal : ${props => props.marginHorizontal || "0"}px;
`;