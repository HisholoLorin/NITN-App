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
      {/* Identification Number */}
      <CustomInput
        icon={() => <MaterialCommunityIcons name="email-outline" size={20} color="#999" />}
        placeholder="Email"
        onChangeText={(value) =>
          setInstitutePersonnelLoginForm({
            ...institutePersonnelLoginForm,
            email: value,
          })
        }
      />

      {/* Password */}
      <PasswordInput
        placeholder="Password"
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
