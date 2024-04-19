import React from 'react';
import { TouchableOpacity } from 'react-native';

import { ButtonContainer, StyledText } from './Styles'

const Button = (props) => {
    const {
        buttonColor,
        text,
        textColor,
        disabled,
        onPress
    } = props;
    return (
        <ButtonContainer buttonColor={buttonColor}>
            <TouchableOpacity style={{padding: 16}} disabled={disabled} onPress={onPress}>
                <StyledText color={textColor}>{text}</StyledText>
            </TouchableOpacity>
        </ButtonContainer>
    );
};


export default Button;
