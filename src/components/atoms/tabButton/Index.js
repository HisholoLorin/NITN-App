import React from 'react';

import { StyledTabButton, TabItemText } from './Styles'

const TabButton = (props) => {
    const {
        active,
        onPress,
        text,
    } = props;
    return (
        <StyledTabButton
            active={active}
            onPress={onPress}>
            <TabItemText active={active}>{text}</TabItemText>
        </StyledTabButton>
    );
};


export default TabButton;
