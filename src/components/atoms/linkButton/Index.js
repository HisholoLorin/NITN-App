import React from 'react';
import { TouchableOpacity } from 'react-native';

import { StyledText } from './Styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LinkButton = (props) => {
    const {
        disabled,
        onPress,
        color,
        size,
        icon,
        text,
    } = props;
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress}>
            <StyledText {...props} color={color} size={size}>
                {text} {icon ? 
                (<MaterialCommunityIcons name={icon} size={size} color={color} />): null}
            </StyledText>
        </TouchableOpacity>
    );
};

export default LinkButton;

