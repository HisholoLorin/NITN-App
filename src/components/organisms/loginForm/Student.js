import { AntDesign } from "@expo/vector-icons";

//Components
import CustomInput from "../../molecules/customInput/Index";
import PasswordInput from "../../molecules/passwordInput/Index";

const StudentLoginForm = ({ studentLoginForm, setStudentLoginForm }) => {
  return (
    <>
      {/* Registration Number */}
      <CustomInput
        icon={() => <MaterialCommunityIcons name="email-outline" size={20} color="#999" />}
        placeholder="Email"
        onChangeText={(value) =>
          setStudentLoginForm({ ...studentLoginForm, email: value })
        }
        
      />

      {/* Password */}
      <PasswordInput
        placeholder="Password"
        onChangeText={(value) =>
          setStudentLoginForm({ ...studentLoginForm, password: value })
        }
      />
    </>
  );
};

export default StudentLoginForm;
