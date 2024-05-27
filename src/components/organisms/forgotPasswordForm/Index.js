import React, { useState } from "react";
import { Dimensions } from "react-native";

//Components
import EmailInput from "../../molecules/emailInput/Index";
import PrimaryButton from "../../molecules/primaryButton/Index";
import Title from "../../atoms/title/Index";
import SubTitle from "../../atoms/subTitle/Index";
import Error from "../../atoms/Error";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { forgotPassword } from "../../../redux/auth";

//Styled Components
import { FormContainer } from "./Styles";

const ForgotPasswordForm = (props) => {
  const [email, setEmail] = useState("");

  const { error } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();

  return (
    <FormContainer>
      <Title>Forgot Password?</Title>
      <SubTitle>
        Please enter your email associated with your account.
      </SubTitle>

      <EmailInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      {error && <Error>{error}</Error>}
      <PrimaryButton
        text="Request Otp"
        onPress={() => {
          dispatch(forgotPassword({ email }));
        }}
      />
    </FormContainer>
  );
};

export default ForgotPasswordForm;
