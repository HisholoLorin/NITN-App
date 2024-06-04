import React, { useState } from "react";

//Components
import PasswordInput from "../../molecules/passwordInput/Index";
import PrimaryButton from "../../molecules/primaryButton/Index";
import Title from "../../atoms/title/Index";
import SubTitle from "../../atoms/subTitle/Index";
import NavLink from "../../atoms/navLink/Index";
import Error from "../../atoms/Error";
import TabButton from "../../atoms/tabButton/Index";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../redux/auth";

//Styled Components
import {
  FormContainer,
  ForgotPasswordNavLink,
  SignupTextContainer,
  TabContainer,
  Description,
  LoginImage,
} from "./Styles";
import InstitutePersonnelLoginForm from "./InstitutePersonnel";
import StudentLoginForm from "./Student";

const LoginForm = (props) => {
  const { navigation } = props;

  const [studentLoginForm, setStudentLoginForm] = useState({});
  const [institutePersonnelLoginForm, setInstitutePersonnelLoginForm] =
    useState({});
  const [selectedOption, setSelectedOption] = useState("Students");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.AuthReducer);

  const handleLogin = () => {
    switch (selectedOption) {
      case "Students":
        dispatch(login({ ...studentLoginForm, type: selectedOption }));
        break;
      case "Institute Personnel":
        dispatch(
          login({ ...institutePersonnelLoginForm, type: selectedOption })
        );
        break;
    }
  };
  return (
    <FormContainer>
      <LoginImage source={require("../../../../assets/NITN_Logo.png")} />
      <Title>Login</Title>
      <SubTitle>Please log in to continue</SubTitle>

      <TabContainer>
        <TabButton
          source={require("../../../../assets/institutePersonnel.png")}
          text="Institute Personnel"
          active={selectedOption === "Institute Personnel"}
          onPress={() => setSelectedOption("Institute Personnel")}
        />
        <TabButton
          source={require("../../../../assets/student.png")}
          text="Students"
          active={selectedOption === "Students"}
          onPress={() => setSelectedOption("Students")}
        />
      </TabContainer>

      {selectedOption == "Students" && (
        <StudentLoginForm
          studentLoginForm={studentLoginForm}
          setStudentLoginForm={setStudentLoginForm}
        />
      )}

      {selectedOption == "Institute Personnel" && (
        <InstitutePersonnelLoginForm
          institutePersonnelLoginForm={institutePersonnelLoginForm}
          setInstitutePersonnelLoginForm={setInstitutePersonnelLoginForm}
        />
      )}
      {error && <Error>{error}</Error>}

      <PrimaryButton text="Login" onPress={handleLogin} />

      <ForgotPasswordNavLink
        navigation={navigation}
        color="#F06449"
        size={16}
        text="Forgot Password?"
        routeName="ForgotPassword"
      />

      <SignupTextContainer>
        <Description>Don't have an account? </Description>
        <NavLink
          navigation={navigation}
          color="#F06449"
          size={15}
          text="Signup"
          routeName="Signup"
        />
      </SignupTextContainer>
    </FormContainer>
  );
};

export default LoginForm;
