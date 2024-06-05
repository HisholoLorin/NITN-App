import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  FontAwesome6,
  FontAwesome,
} from "@expo/vector-icons";

//Components
import CustomInput from "../../molecules/customInput/Index";

//Helper
import { convertToShortDateFormat } from "../../../helper/dateTimeFormats";
import { toUpperFirstLetter } from "../../../helper/auth";

const StudentView = ({ studentForm, edit }) => {
  return (
    <>
      {/* Username */}
      <CustomInput
        icon={() => <SimpleIcon name="user" size={20} color="#999" />}
        placeholder="Username"
        value={studentForm?.userName}
        editable={edit}
        color="#000"
      />

      {/* Registration Number */}
      <CustomInput
        icon={() => <AntDesign name="idcard" size={20} color="#999" />}
        placeholder="Registration No"
        value={studentForm?.registrationNo}
        keyboardType="number-pad"
        editable={edit}
        color="#000"
      />

      {/* Mobile Number */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="cellphone" size={20} color="#999" />
        )}
        placeholder="Mobile Number"
        value={studentForm?.mobileNo}
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
        value={studentForm?.email}
        keyboardType="email-address"
        editable={edit}
        color="#000"
      />

      {/* Date of Birth*/}
      <CustomInput
        icon={() => <FontAwesome name="calendar" size={20} color="#999" />}
        placeholder="Date of Birth"
        value={convertToShortDateFormat(studentForm?.dateOfBirth)}
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
        value={studentForm?.gender && toUpperFirstLetter(studentForm?.gender)}
        keyboardType="email-address"
        editable={edit}
        color="#000"
      />

      {/* Blood Type */}
      <CustomInput
        icon={() => <MaterialIcons name="bloodtype" size={20} color="#999" />}
        placeholder="Blood Type"
        value={studentForm?.bloodType}
        editable={edit}
        color="#000"
      />

      {/* Medical Conditions */}
      <CustomInput
        icon={() => (
          <FontAwesome5 name="briefcase-medical" size={20} color="#999" />
        )}
        placeholder="Medical Conditions"
        value={studentForm?.medicalConditions}
        editable={edit}
        color="#000"
      />

      {/* Ethnicity */}
      <CustomInput
        icon={() => <FontAwesome6 name="people-group" size={20} color="#999" />}
        placeholder="Ethnicity"
        value={studentForm.ethnicity}
        editable={edit}
        color="#000"
      />

      {/* Address */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="home-outline" size={20} color="#999" />
        )}
        placeholder="Address"
        value={studentForm?.address}
        editable={edit}
        color="#000"
      />

      {/* Guardian's Name */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="cellphone" size={20} color="#999" />
        )}
        placeholder="Guardian's Mobile Number"
        value={studentForm?.guardianMobileNumber}
        keyboardType="number-pad"
        editable={edit}
        color="#000"
      />

      {/* Department */}
      <CustomInput
        icon={() => <Entypo name="flow-tree" size={20} color="#999" />}
        placeholder="Department"
        value={studentForm?.deptName}
        keyboardType="number-pad"
        editable={edit}
        color="#000"
      />

      {/* Batch */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons
            name="file-document-multiple-outline"
            size={20}
            color="#999"
          />
        )}
        placeholder="Batch"
        value={studentForm?.batch}
        keyboardType="number-pad"
        editable={edit}
        color="#000"
      />

      {/* Hostel Name */}
      <CustomInput
        icon={() => <FontAwesome5 name="building" size={20} color="#999" />}
        placeholder="Hostel Name"
        value={studentForm?.hostelName}
        editable={edit}
        color="#000"
      />
    </>
  );
};

export default StudentView;
