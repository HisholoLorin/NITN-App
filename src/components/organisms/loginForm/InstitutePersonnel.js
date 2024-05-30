import { AntDesign } from "@expo/vector-icons";

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
        icon={() => <AntDesign name="idcard" size={20} color="#999" />}
        placeholder="Identification No"
        onChangeText={(value) =>
          setInstitutePersonnelLoginForm({
            ...institutePersonnelLoginForm,
            identificationNo: value,
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
