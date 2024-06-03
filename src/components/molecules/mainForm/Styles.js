import styled from "styled-components/native";
import { Dimensions, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

export const FormContainer = styled(TouchableOpacity)`
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  marginBottom: ${height * 0.02}px;
  padding: ${width * 0.04}px;
  backgroundColor: #FFF;
  borderRadius: 10px;
  shadowColor: #000px;
  elevation: 3;
`;

export const IconContainer = styled(TouchableOpacity)`
  marginLeft: ${width * 0.02}px;
  padding: 10px;
  padding-right: 0px;
  borderRadius: 50px;
`;  

export const Title = styled.Text`
  fontSize:  ${width * 0.040}px;
  fontWeight: bold;
`;
export const Description = styled.Text`
  fontSize: ${width * 0.040}px;
  color: #333;
`;

export const Date = styled.Text`
  fontSize: ${width * 0.030}px;
  color: #555;
`;