import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";

import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

//Components
import CustomInput from "../../molecules/customInput/Index";
import CustomPicker from "../../molecules/customPicker/Index";
import PasswordInput from "../../molecules/passwordInput/Index";
import CustomDatePicker from "../../molecules/customDatePicker/Index";

const InstitutePersonnelForm = ({
  institutePersonnelForm,
  setInstitutePersonnelForm,
}) => {
  return (
    <>
      {/* Username */}
      <CustomInput
        icon={() => <SimpleIcon name="user" size={20} color="#999" />}
        placeholder="Username"
        onChangeText={(value) =>
          setInstitutePersonnelForm({
            ...institutePersonnelForm,
            username: value,
          })
        }
      />

      {/* Identification Number */}
      <CustomInput
        icon={() => <AntDesign name="idcard" size={20} color="#999" />}
        placeholder="Identification No"
        onChangeText={(value) =>
          setInstitutePersonnelForm({
            ...institutePersonnelForm,
            identificationNo: value,
          })
        }
      />

      {/* Designation */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons
            name="badge-account-outline"
            size={20}
            color="#999"
          />
        )}
        placeholder="Designation"
        onChangeText={(value) =>
          setInstitutePersonnelForm({
            ...institutePersonnelForm,
            designation: value,
          })
        }
      />

      {/* Mobile Number */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="cellphone" size={20} color="#999" />
        )}
        placeholder="Mobile Number"
        onChangeText={(value) =>
          setInstitutePersonnelForm({
            ...institutePersonnelForm,
            mobileNo: value,
          })
        }
        keyboardType="number-pad"
      />

      {/* Email */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="email-outline" size={20} color="#999" />
        )}
        placeholder="Email"
        onChangeText={(value) =>
          setInstitutePersonnelForm({ ...institutePersonnelForm, email: value })
        }
        keyboardType="email-address"
      />

      {/* Password */}
      <PasswordInput
        placeholder="Password"
        onChangeText={(value) =>
          setInstitutePersonnelForm({
            ...institutePersonnelForm,
            password: value,
          })
        }
      />

      {/* Confirm Password */}
      <PasswordInput
        placeholder="Confirm Password"
        onChangeText={(value) =>
          setInstitutePersonnelForm({
            ...institutePersonnelForm,
            confirmPassword: value,
          })
        }
      />

      {/* Date of Birth */}
      <CustomDatePicker
        state={institutePersonnelForm?.dateOfBirth}
        setState={(value) =>
          setInstitutePersonnelForm({
            ...institutePersonnelForm,
            dateOfBirth: value,
          })
        }
      />

      {/* Gender */}
      <CustomPicker
        placeholder="Gender"
        icon={() => (
          <MaterialCommunityIcons
            name="gender-male-female"
            size={20}
            color="#999"
          />
        )}
        state={institutePersonnelForm?.gender}
        setState={(value) =>
          setInstitutePersonnelForm({
            ...institutePersonnelForm,
            gender: value,
          })
        }
        data={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
      />

      {/* Address */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="home-outline" size={20} color="#999" />
        )}
        placeholder="Address"
        onChangeText={(value) =>
          setInstitutePersonnelForm({
            ...institutePersonnelForm,
            address: value,
          })
        }
      />

      {/* Department */}
      <CustomInput
        placeholder="Department"
        icon={() => <Entypo name="flow-tree" size={20} color="#999" />}
        onChangeText={(value) =>
          setInstitutePersonnelForm({
            ...institutePersonnelForm,
            department: value,
          })
        }
      />
    </>
  );
};

export default InstitutePersonnelForm;
