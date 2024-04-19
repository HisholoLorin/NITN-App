import styled from 'styled-components/native';

export const InputContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

export const NumberInput = styled.TextInput`
    width: 80px;
    height: 80px;
    border-width: ${props => (props.index === props.activeIndex) ? '2px' : '1px'};
    border-radius: 15px;
    border-color: ${props => (props.index === props.activeIndex) ? '#EF9F27' : '#D1D1D1'};
    text-align: center;
    font-size: 18px;
    padding: 8px;
    margin-right: ${props => (props.index === props.otp.length - 1) ? '0px' : '10px'};
`;