import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";

import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

//Components
import CustomInput from "../../molecules/customInput/Index";
import CustomPicker from "../../molecules/customPicker/Index";
import PasswordInput from "../../molecules/passwordInput/Index";
import CustomDatePicker from "../../molecules/customDatePicker/Index";

const MaintenanceEdit = ({ maintenanceForm, setMaintenanceForm, edit }) => {
  return (
    <>
      {/* Username */}
      <CustomInput
        icon={() => <SimpleIcon name="user" size={20} color="#999" />}
        placeholder="Username"
        value={maintenanceForm?.userName}
        onChangeText={(value) =>
          setMaintenanceForm({
            ...maintenanceForm,
            userName: value,
          })
        }
        editable={edit}
      />

      {/* Identification Number */}
      <CustomInput
        icon={() => <AntDesign name="idcard" size={20} color="#999" />}
        placeholder="Identification No"
        value={maintenanceForm?.identificationNo}
        onChangeText={(value) =>
          setMaintenanceForm({
            ...maintenanceForm,
            identificationNo: value,
          })
        }
        editable={edit}
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
        value={maintenanceForm?.designation}
        onChangeText={(value) =>
          setMaintenanceForm({
            ...maintenanceForm,
            designation: value,
          })
        }
        editable={edit}
      />

      {/* Mobile Number */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="cellphone" size={20} color="#999" />
        )}
        placeholder="Mobile Number"
        value={maintenanceForm?.mobileNo}
        onChangeText={(value) =>
          setMaintenanceForm({
            ...maintenanceForm,
            mobileNo: value,
          })
        }
        keyboardType="number-pad"
        editable={edit}
      />

      {/* Email */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="email-outline" size={20} color="#999" />
        )}
        placeholder="Email"
        value={maintenanceForm?.email}
        onChangeText={(value) =>
          setMaintenanceForm({ ...maintenanceForm, email: value })
        }
        keyboardType="email-address"
        editable={edit}
      />

      {/* Date of Birth */}
      <CustomDatePicker
        state={maintenanceForm?.dateOfBirth}
        setState={(value) =>
          setMaintenanceForm({
            ...maintenanceForm,
            dateOfBirth: value,
          })
        }
        edit={edit}
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
        state={maintenanceForm?.gender}
        setState={(value) =>
          setMaintenanceForm({
            ...maintenanceForm,
            gender: value,
          })
        }
        data={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
        edit={edit}
      />

      {/* Address */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="home-outline" size={20} color="#999" />
        )}
        placeholder="Address"
        value={maintenanceForm?.address}
        onChangeText={(value) =>
          setMaintenanceForm({
            ...maintenanceForm,
            address: value,
          })
        }
        editable={edit}
      />

      {/* Department */}
      <CustomInput
        placeholder="Department"
        icon={() => <Entypo name="flow-tree" size={20} color="#999" />}
        value={maintenanceForm?.department}
        onChangeText={(value) =>
          setMaintenanceForm({
            ...maintenanceForm,
            department: value,
          })
        }
        editable={edit}
      />
    </>
  );
};

export default MaintenanceEdit;
