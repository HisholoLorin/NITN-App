import React from 'react';
import { TouchableOpacity } from 'react-native';

import { StyledText } from './Styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const NavLink = (props) => {
    const {
        navigation,
        text,
        color,
        disabled,
        routeName,
        size,
        icon,
    } = props;
    return (
        <TouchableOpacity disabled={disabled} onPress={() => navigation.navigate(routeName)}>
            <StyledText {...props} color={color} size={size}>
                {text} {icon ? 
                (<MaterialCommunityIcons name={icon} size={size} color={color} />): null}
            </StyledText>
        </TouchableOpacity>
    );
};

export default NavLink;

