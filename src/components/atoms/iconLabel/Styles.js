import styled from "styled-components/native";

export const Container = styled.View`
    flexDirection: row;
    alignContent : center;
    marginTop : ${props => props.top ||"7px"};
    marginBottom : ${props => props.bottom ||"7px"};
`;

export const IconContainer = styled.View`
    width: ${props => props.width ||"40px"};
`;