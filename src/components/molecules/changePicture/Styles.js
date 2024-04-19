import styled from "styled-components/native";
import Container from "../../atoms/Container";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";

export const FormContainer = styled(Container)`
  margin: 10px 30px;
`;

export const Bold = styled.Text`
    fontWeight : bold;
`
export const TextCenter = styled.Text`
    textAlign : center;
`

export const IconContainer = styled.View`
    flexDirection : row;
    marginVertical : 20px;
    justifyContent : space-around;
`

export const CameraIcon = styled(AntDesign)`
  fontSize : 25px;
  color : green;
  backgroundColor : transparent;
  padding : 10px;
  borderRadius : 50px;
  borderWidth : 1px;
  borderColor : #6C6C6C;
  textAlign : center;
`

export const GalaryIcon = styled(FontAwesome)`
  fontSize : 23px;
  color : green;
  backgroundColor : transparent;
  padding : 10px;
  borderRadius : 50px;
  borderWidth : 1px;
  borderColor : #6C6C6C;
  textAlign : center;
`
export const DeleteIcon = styled(MaterialIcons)`
  fontSize : 25px;
  color : green;
  backgroundColor : transparent;
  padding : 10px;
  borderRadius : 50px;
  borderWidth : 1px;
  borderColor : #6C6C6C;
  textAlign : center;
`