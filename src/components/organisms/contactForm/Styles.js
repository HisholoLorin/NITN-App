import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const FormContainer = styled.View`
    flex: 1;
    flexDirection: row;
    margin: ${width * 0.05}px;
    justifyContent: space-around;
`;