import React, { useState } from "react";

//Components
import PrimaryButton from "../../molecules/primaryButton/Index";
import NavLink from "../../atoms/navLink/Index";
import Title from "../../atoms/title/Index";
import SubTitle from "../../atoms/subTitle/Index";
import Error from "../../atoms/Error";
import StudentForm from "./Student";
import TabButton from "../../atoms/tabButton/Index";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../../redux/auth";

//Styled Components
import {
  LoginTextContainer,
  Description,
  FormContainer,
  TabContainer,
} from "./Styles";
import InstitutePersonnelForm from "./InstitutePersonnel";

const SignupForm = (props) => {
  const { navigation } = props;
  const [studentForm, setStudentForm] = useState({});
  const [institutePersonnelForm, setInstitutePersonnelForm] = useState({});
  const [selectedOption, setSelectedOption] = useState("Students");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.AuthReducer);

  const handleSignup = () => {
    switch (selectedOption) {
      case "Students":
        dispatch(signup({ ...studentForm, type: selectedOption }));
        break;
      case "Institute Personnel":
        dispatch(signup({ ...institutePersonnelForm, type: selectedOption }));
        break;
    }
  };

  return (
    <FormContainer>
      <Title>Register</Title>
      <SubTitle>Please sign up to continue</SubTitle>

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
        <StudentForm
          studentForm={studentForm}
          setStudentForm={setStudentForm}
        />
      )}

      {selectedOption == "Institute Personnel" && (
        <InstitutePersonnelForm
          institutePersonnelForm={institutePersonnelForm}
          setInstitutePersonnelForm={setInstitutePersonnelForm}
        />
      )}

      {error && <Error>{error}</Error>}

      <PrimaryButton text="Continue" onPress={handleSignup} />

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
