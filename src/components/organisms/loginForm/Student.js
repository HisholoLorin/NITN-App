import { AntDesign } from "@expo/vector-icons";

//Components
import CustomInput from "../../molecules/customInput/Index";
import PasswordInput from "../../molecules/passwordInput/Index";

const StudentLoginForm = ({ studentLoginForm, setStudentLoginForm }) => {
  return (
    <>
      {/* Username */}
      <CustomInput
        icon={() => <AntDesign name="idcard" size={20} color="#999" />}
        placeholder="Registration No"
        onChangeText={(value) =>
          setStudentLoginForm({ ...studentLoginForm, registrationNo: value })
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
