import styled from "styled-components/native";
import Container from "../../atoms/Container";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const FormContainer = styled(Container)`
  margin: 10px 30px;
  justify-content: top;
`;

export const StyledIcon = styled(Ionicons)`
  color: ${(props) => props.iconColor || "#6C6C6C"};
  margin-top: 14px;
`;

export const IconContainer = styled(TouchableOpacity)`
  position: absolute;
  right: 0;
`;