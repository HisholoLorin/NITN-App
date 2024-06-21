import { MaterialCommunityIcons } from "@expo/vector-icons";

//Components
import CustomInput from "../../molecules/customInput/Index";
import PasswordInput from "../../molecules/passwordInput/Index";

const InstitutePersonnelLoginForm = ({
  institutePersonnelLoginForm,
  setInstitutePersonnelLoginForm,
}) => {
  return (
    <>
      {/* Email */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="email-outline" size={20} color="#999" />
        )}
        placeholder="Email"
        value={institutePersonnelLoginForm?.email}
        onChangeText={(value) =>
          setInstitutePersonnelLoginForm({
            ...institutePersonnelLoginForm,
            email: value,
          })
        }
        keyboardType="email-address"
      />

      {/* Password */}
      <PasswordInput
        placeholder="Password"
        value={institutePersonnelLoginForm?.password}
        onChangeText={(value) =>
          setInstitutePersonnelLoginForm({
            ...institutePersonnelLoginForm,
            password: value,
          })
        }
      />
    </>
  );
};

export default InstitutePersonnelLoginForm;
