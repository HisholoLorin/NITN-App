import React, { useState, useRef, useEffect } from "react";
import { Keyboard } from "react-native";

//Components
import PasswordInput from "../../molecules/passwordInput/Index";
import PrimaryButton from "../../molecules/primaryButton/Index";
import Title from "../../atoms/title/Index";
import SubTitle from "../../atoms/subTitle/Index";
import Error from "../../atoms/Error";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../../redux/auth";

//Styled Components
import { FormContainer } from "./Styles";

const ResetPasswordForm = ({ route }) => {
  const { email, otp } = route.params;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.AuthReducer);

  const navigateTo = () => {
    dispatch(
      changePassword({
        email,
        otp,
        password,
        confirmPassword,
      })
    );
  };

  return (
    <FormContainer>
      <Title>New Password</Title>
      <SubTitle>Enter your new password for your account</SubTitle>

      <PasswordInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
      />
      <PasswordInput
        label="Confirm Password"
        placeholder="Re-Enter your password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {error && <Error>{error}</Error>}
      <PrimaryButton text="Reset Password" onPress={navigateTo} />
    </FormContainer>
  );
};

export default ResetPasswordForm;
