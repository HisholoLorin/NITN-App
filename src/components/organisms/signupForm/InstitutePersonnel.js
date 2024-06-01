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
        value={institutePersonnelForm?.userName}
        onChangeText={(value) =>
          setInstitutePersonnelForm({
            ...institutePersonnelForm,
            userName: value,
          })
        }
      />

      {/* Identification Number */}
      <CustomInput
        icon={() => <AntDesign name="idcard" size={20} color="#999" />}
        placeholder="Identification No"
        value={institutePersonnelForm?.identificationNo}
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
        value={institutePersonnelForm?.designation}
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
        value={institutePersonnelForm?.mobileNo}
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
        value={institutePersonnelForm?.email}
        onChangeText={(value) =>
          setInstitutePersonnelForm({ ...institutePersonnelForm, email: value })
        }
        keyboardType="email-address"
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
        value={institutePersonnelForm?.address}
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
        value={institutePersonnelForm?.department}
        onChangeText={(value) =>
          setInstitutePersonnelForm({
            ...institutePersonnelForm,
            department: value,
          })
        }
      />

      {/* Password */}
      <PasswordInput
        placeholder="Password"
        value={institutePersonnelForm?.password}
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
        value={institutePersonnelForm?.confirmPassword}
        onChangeText={(value) =>
          setInstitutePersonnelForm({
            ...institutePersonnelForm,
            confirmPassword: value,
          })
        }
      />
    </>
  );
};

export default InstitutePersonnelForm;
