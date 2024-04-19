import React from 'react';
import styled from "styled-components";

const Container = props => {
    return (
        <View {...props}>{props.children}</View>
    )
}

export default Container

const View = styled.View`
    flex: 1;
    background-color: #ffffff;
`;