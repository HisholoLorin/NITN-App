import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Container from "../../../components/atoms/Container";
import NavLink from "../../../components/atoms/navLink/Index";

export const FormContainer = styled(Container)`
  padding: 30px;
  justify-content: top;
`;

export const TabContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ForgotPasswordNavLink = styled(NavLink)`
  margin: 15px 0;
  text-align: center;
`;

export const SignupTextContainer = styled.View`
  flex-direction: row;
  align-self: center;
  position: relative;
  margin-top: 10px;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: #636363;
`;

export const LoginImage = styled.Image`
  margin-bottom: 10px;
  align-self: center;
  width: 150px;
  height: 150px;
`;
