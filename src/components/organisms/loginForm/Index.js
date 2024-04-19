import React, { useState } from "react";

//Components
import EmailInput from "../../molecules/emailInput/Index";
import UserInput from "../../molecules/userInput/Index";
import PasswordInput from "../../molecules/passwordInput/Index";
import PrimaryButton from "../../molecules/primaryButton/Index";
import Title from "../../atoms/title/Index";
import SubTitle from "../../atoms/subTitle/Index";
import NavLink from "../../atoms/navLink/Index";
import Error from "../../atoms/Error";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../redux/auth";

//Styled Components
import {
  FormContainer,
  ForgotPasswordNavLink,
  SignupTextContainer,
  Description,
} from "./Styles";

const LoginForm = (props) => {
  const { navigation } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.AuthReducer);
  return (
    <FormContainer>
      <Title>Login</Title>
      <SubTitle>Please log in to continue</SubTitle>

      <UserInput
        placeholder="Enter your username or email"
        value={username}
        onChangeText={setUsername}
      />
      <PasswordInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
      />
      {error && <Error>{error}</Error>}
      <ForgotPasswordNavLink
        navigation={navigation}
        color="#EF9F27"
        size={16}
        text="Forgot Password"
        routeName="ForgotPassword"
      />
      <PrimaryButton
        text="Login"
        onPress={() =>
          dispatch(login({ username, password }))
        }
      />

      <SignupTextContainer>
        <Description>Don't have an account? </Description>
        <NavLink
          navigation={navigation}
          color="#EF9F27"
          size={15}
          text="Signup"
          routeName="Signup"
        />
      </SignupTextContainer>
    </FormContainer>
  );
};

export default LoginForm;
