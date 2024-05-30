import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  margin: 10px 0;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: ${width * 0.05}px;
  font-weight: bold;
`;

export const Button = styled(TouchableOpacity)`
  backgroundColor: #6a0dad;
  paddingVertical: ${height * 0.02}px;
  marginHorizontal: ${width * 0.02}px;
  borderRadius: ${width * 0.05}px;
  alignItems: center;
  marginBottom: ${height * 0.02}px;
`;