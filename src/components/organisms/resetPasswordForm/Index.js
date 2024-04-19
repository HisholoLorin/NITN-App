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
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const dispatch = useDispatch();
  const { otpId } = route.params;
  const { error } = useSelector((state) => state.AuthReducer);

  const navigateTo = () => {
    dispatch(
      changePassword({
        otpId,
        password,
        retypePassword,
      })
    );
  };

  return (
    <FormContainer>
      <Title>New Password</Title>
      <SubTitle>Enter your new password for your Tabernacle account</SubTitle>

      <PasswordInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
      />
      <PasswordInput
        label="Confirm Password"
        placeholder="Re-Enter your password"
        value={retypePassword}
        onChangeText={setRetypePassword}
      />
      <Error>{error}</Error>
      <PrimaryButton text="Reset Password" onPress={navigateTo} />
    </FormContainer>
  );
};

export default ResetPasswordForm;
