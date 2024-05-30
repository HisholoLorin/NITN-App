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

const LoginForm = (props) => {
  const { navigation } = props;

  const [activeTab, setActiveTab] = useState("student");
  const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    staffIdNo: "",
    maintenanceIdNo: "",
    regNo: "",
    password: "",
  });

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const getCurrentPassword = () => {
    if (activeTab === "student") return formData.studentPassword;
    else return formData.staffPassword;
  };

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.AuthReducer);
  return (
    (
      <FormContainer>
        <PasswordInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      </FormContainer>
    )
    // null && (
    //   <FormContainer>
    //     <LoginImage source={require("../../../../assets/NITN_Logo.png")} />
    //     <Title>Login</Title>
    //     <SubTitle>Please log in to continue</SubTitle>

    //     <TabContainer>
    //       <TabButton
    //         source={require("../../../../assets/staff.png")}
    //         text="Staffs"
    //         active={selectedOption === "staffs"}
    //         onPress={() => setSelectedOption("staffs")}
    //       />
    //       <TabButton
    //         source={require("../../../../assets/student.png")}
    //         text="Students"
    //         active={selectedOption === "students"}
    //         onPress={() => setSelectedOption("students")}
    //       />
    //     </TabContainer>

    //     <UserInput
    //       placeholder="Enter your username or email"
    //       value={username}
    //       onChangeText={setUsername}
    //     />
    //     <PasswordInput
    //       placeholder="Enter your password"
    //       value={password}
    //       onChangeText={setPassword}
    //     />
    //     {error && <Error>{error}</Error>}
    //     <ForgotPasswordNavLink
    //       navigation={navigation}
    //       color="#EF9F27"
    //       size={16}
    //       text="Forgot Password"
    //       routeName="ForgotPassword"
    //     />
    //     <PrimaryButton
    //       text="Login"
    //       onPress={() => dispatch(login({ username, password }))}
    //     />

    //     <SignupTextContainer>
    //       <Description>Don't have an account? </Description>
    //       <NavLink
    //         navigation={navigation}
    //         color="#EF9F27"
    //         size={15}
    //         text="Signup"
    //         routeName="Signup"
    //       />
    //     </SignupTextContainer>
    //   </FormContainer>
    // )
  );
};

export default LoginForm;
