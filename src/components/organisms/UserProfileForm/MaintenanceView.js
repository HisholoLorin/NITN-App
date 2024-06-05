import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";

import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

//Components
import CustomInput from "../../molecules/customInput/Index";

//Helper
import { convertToShortDateFormat } from "../../../helper/dateTimeFormats";
import { toUpperFirstLetter } from "../../../helper/auth";

const MaintenanceView = ({ maintenanceForm, edit }) => {
  return (
    <>
      {/* Username */}
      <CustomInput
        icon={() => <SimpleIcon name="user" size={20} color="#999" />}
        placeholder="Username"
        value={maintenanceForm?.userName}
        editable={edit}
        color="#000"
      />

      {/* Identification Number */}
      <CustomInput
        icon={() => <AntDesign name="idcard" size={20} color="#999" />}
        placeholder="Identification No"
        value={maintenanceForm?.identificationNo}
        editable={edit}
        color="#000"
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
        editable={edit}
        color="#000"
      />

      {/* Mobile Number */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="cellphone" size={20} color="#999" />
        )}
        placeholder="Mobile Number"
        value={maintenanceForm?.mobileNo}
        keyboardType="number-pad"
        editable={edit}
        color="#000"
      />

      {/* Email */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="email-outline" size={20} color="#999" />
        )}
        placeholder="Email"
        value={maintenanceForm?.email}
        keyboardType="email-address"
        editable={edit}
        color="#000"
      />

      {/* Date of Birth */}
      <CustomInput
        icon={() => <FontAwesome name="calendar" size={20} color="#999" />}
        placeholder="Date of Birth"
        value={convertToShortDateFormat(maintenanceForm?.dateOfBirth)}
        keyboardType="email-address"
        editable={edit}
        color="#000"
      />

      {/* Gender*/}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons
            name="gender-male-female"
            size={20}
            color="#999"
          />
        )}
        placeholder="Gender"
        value={
          maintenanceForm?.gender && toUpperFirstLetter(maintenanceForm?.gender)
        }
        keyboardType="email-address"
        editable={edit}
        color="#000"
      />

      {/* Address */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="home-outline" size={20} color="#999" />
        )}
        placeholder="Address"
        value={maintenanceForm?.address}
        editable={edit}
        color="#000"
      />

      {/* Department */}
      <CustomInput
        placeholder="Department"
        icon={() => <Entypo name="flow-tree" size={20} color="#999" />}
        value={maintenanceForm?.department}
        editable={edit}
        color="#000"
      />
    </>
  );
};

export default MaintenanceView;
