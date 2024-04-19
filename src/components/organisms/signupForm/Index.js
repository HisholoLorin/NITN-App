import React, { useState } from "react";

//Components
import EmailInput from "../../molecules/emailInput/Index";
import PasswordInput from "../../molecules/passwordInput/Index";
import PrimaryButton from "../../molecules/primaryButton/Index";
import NameInput from "../../molecules/nameInput/Index";
import NavLink from "../../atoms/navLink/Index";
import Title from "../../atoms/title/Index";
import SubTitle from "../../atoms/subTitle/Index";
import Error from "../../atoms/Error";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../../redux/auth";

//Styled Components
import { LoginTextContainer, Description, FormContainer } from "./Styles";

//Helper
import { capitalizedFirstLetter } from "../../../helper/auth";

const SignupForm = (props) => {
  const { navigation } = props;
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.AuthReducer);

  return (
    <FormContainer>
      <Title>Create Account</Title>
      <SubTitle>Please fill the form with the your details</SubTitle>

      <NameInput
        placeholder="Enter your fullname"
        value={fullname}
        onChangeText={(value) => setFullname(capitalizedFirstLetter(value))}
      />
      <EmailInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
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

      {error && <Error>{error}</Error>}

      <PrimaryButton
        text="Continue"
        onPress={() =>
          dispatch(
            signup({
              fullname,
              email,
              password,
              retypePassword,
            })
          )
        }
      />

      <LoginTextContainer>
        <Description>Already have an account? </Description>
        <NavLink
          navigation={navigation}
          color="#EF9F27"
          size={15}
          text="Login"
          routeName="Login"
        />
      </LoginTextContainer>
    </FormContainer>
  );
};

export default SignupForm;
