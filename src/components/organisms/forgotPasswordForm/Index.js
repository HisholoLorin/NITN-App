import React, { useState } from "react";
import { Dimensions } from "react-native";

//Components
import UserInput from "../../molecules/userInput/Index"
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
  const [username, setUsername] = useState("");

  const { error } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();

  return (
    <FormContainer>
      <Title>Forgot Password?</Title>
      <SubTitle>
        Please enter your username or email associated with your Pineapple
        account.
      </SubTitle>

      <UserInput
        placeholder="Enter your username or email"
        value={username}
        onChangeText={setUsername}
      />
      {error && <Error>{error}</Error>}
      <PrimaryButton
        text="Request Otp"
        onPress={() => {
          dispatch(forgotPassword({username}));
        }}
      />
    </FormContainer>
  );
};

export default ForgotPasswordForm;
