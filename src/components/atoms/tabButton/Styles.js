import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const StyledTabButton = styled.TouchableOpacity`
  flex: 1;
  alignItems: center;
  paddingVertical: ${height * 0.015}px;
  borderBottomWidth: 2px;
  borderBottomColor: ${(props) => props.active? "#001F54" : "transparent"};
`;

export const TabItemImage = styled.Image`
  width: ${width * 0.08}px;
  height: ${width * 0.08}px;
  marginBottom: ${height * 0.01}px;
`;

export const TabItemText = styled.Text`
  color: ${(props) => (props.active ? "#001F54" : "#999")};
  text-align: center;
  font-size: ${width * 0.04}px;
  font-weight: ${(props) => (props.active ? "600" : "400")};
`;
