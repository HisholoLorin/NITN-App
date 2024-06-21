import { MaterialCommunityIcons } from "@expo/vector-icons";

//Components
import CustomInput from "../../molecules/customInput/Index";
import PasswordInput from "../../molecules/passwordInput/Index";

const StudentLoginForm = ({ studentLoginForm, setStudentLoginForm }) => {
  return (
    <>
      {/* Email */}
      <CustomInput
        icon={() => <MaterialCommunityIcons name="email-outline" size={20} color="#999" />}
        placeholder="Email"
        value={studentLoginForm?.email}
        onChangeText={(value) =>
          setStudentLoginForm({ ...studentLoginForm, email: value })
        }
        keyboardType="email-address"
      />

      {/* Password */}
      <PasswordInput
        placeholder="Password"
        value={studentLoginForm?.password}
        onChangeText={(value) =>
          setStudentLoginForm({ ...studentLoginForm, password: value })
        }
      />
    </>
  );
};

export default StudentLoginForm;
