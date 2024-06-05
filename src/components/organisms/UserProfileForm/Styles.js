import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ViewContainer = styled.View`
  margin: 0px 20px;
`;

export const CameraIcon = styled(FontAwesome)`
  position : absolute;
  bottom : 0px;
  right : 0px;
  fontSize : 20px;
  color : #000000;
  backgroundColor : #D1D1D1;
  padding : 5px;
  borderRadius : 50px;
`;

export const ProfilePicture = styled.Image`
  width: 120px;
  height: 120px;
  borderRadius: 80px;
  borderWidth : 5px;
  borderColor : #D1D1D1;
`;

export const ProfilePictureContainer = styled.View`
  paddingTop: ${height * 0.1}px;
  paddingBottom: ${height * 0.05}px;
  alignItems: center;
`;

export const ProfileBackground = styled.View`
  position: absolute;
  height: 120%;
  width: 100%;
  backgroundColor: #F06449;
  borderBottomLeftRadius: 40px;
  borderBottomRightRadius: 40px;
`;