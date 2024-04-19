import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';

export const ViewContainer = styled.View`
  margin: 0px 20px;
`

export const CameraIcon = styled(FontAwesome)`
  position : absolute;
  bottom : 0px;
  right : 0px;
  fontSize : 20px;
  color : #000000;
  backgroundColor : #D1D1D1;
  padding : 5px;
  borderRadius : 50px;
`

export const ProfilePicture = styled.Image`
  width: 120px;
  height: 120px;
  borderRadius: 80px;
  borderWidth : 5px;
  borderColor : #D1D1D1;
`

export const ProfilePictureContainer = styled.View`
  marginVertical: 20px;
  alignItems: center;
  justifyContent: center;
`