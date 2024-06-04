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
import CustomPicker from "../../molecules/customPicker/Index";
import CustomDatePicker from "../../molecules/customDatePicker/Index";

//Helper
import { convertToShortDateFormat } from "../../../helper/dateTimeFormats";

const StudentEdit = ({ studentForm, setStudentForm, edit }) => {
  const department = [
    { label: "B.Tech, CE" },
    { label: "B.Tech, CSE" },
    { label: "B.Tech, ECE" },
    { label: "B.Tech, EEE" },
    { label: "B.Tech, EIE" },
    { label: "B.Tech, ME" },
    { label: "M.Tech, CSE" },
    { label: "M.Tech, EEE" },
    { label: "M.Sc, SH" },
  ];
  return (
    <>
      {/* Username */}
      <CustomInput
        icon={() => <SimpleIcon name="user" size={20} color="#999" />}
        placeholder="Username"
        value={studentForm?.userName}
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, userName: value })
        }
        editable={edit}
      />

      {/* Registration Number */}
      <CustomInput
        icon={() => <AntDesign name="idcard" size={20} color="#999" />}
        placeholder="Registration No"
        value={studentForm?.registrationNo}
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, registrationNo: value })
        }
        keyboardType="number-pad"
        editable={edit}
      />

      {/* Mobile Number */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="cellphone" size={20} color="#999" />
        )}
        placeholder="Mobile Number"
        value={studentForm?.mobileNo}
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, mobileNo: value })
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
        value={studentForm?.email}
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, email: value })
        }
        keyboardType="email-address"
        editable={edit}
      />

      {/* Date of Birth */}
      <CustomDatePicker
        state={convertToShortDateFormat(studentForm?.dateOfBirth)}
        setState={(value) =>
          setStudentForm({
            ...studentForm,
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
        state={studentForm?.gender}
        setState={(value) =>
          setStudentForm({
            ...studentForm,
            gender: value,
          })
        }
        data={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
        edit={edit}
      />

      {/* Blood Type */}
      <CustomInput
        icon={() => <MaterialIcons name="bloodtype" size={20} color="#999" />}
        placeholder="Blood Type"
        value={studentForm?.bloodType}
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, bloodType: value })
        }
        editable={edit}
      />

      {/* Medical Conditions */}
      <CustomInput
        icon={() => (
          <FontAwesome5 name="briefcase-medical" size={20} color="#999" />
        )}
        placeholder="Medical Conditions"
        value={studentForm?.medicalConditions}
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, medicalConditions: value })
        }
        editable={edit}
      />

      {/* Ethnicity */}
      <CustomInput
        icon={() => <FontAwesome6 name="people-group" size={20} color="#999" />}
        placeholder="Ethnicity"
        value={studentForm.ethnicity}
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, ethnicity: value })
        }
        editable={edit}
      />

      {/* Address */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="home-outline" size={20} color="#999" />
        )}
        placeholder="Address"
        value={studentForm?.address}
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, address: value })
        }
        editable={edit}
      />

      {/* Guardian's Name */}
      <CustomInput
        icon={() => (
          <MaterialCommunityIcons name="cellphone" size={20} color="#999" />
        )}
        placeholder="Guardian's Mobile Number"
        value={studentForm?.guardianMobileNumber}
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, guardianMobileNumber: value })
        }
        keyboardType="number-pad"
        editable={edit}
      />

      {/* Department */}
      <CustomPicker
        placeholder="Department"
        icon={() => <Entypo name="flow-tree" size={20} color="#999" />}
        state={studentForm?.deptName}
        setState={(value) =>
          setStudentForm({
            ...studentForm,
            deptName: value,
          })
        }
        data={department}
        edit={edit}
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
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, batch: value })
        }
        keyboardType="number-pad"
        editable={edit}
      />

      {/* Hostel Name */}
      <CustomInput
        icon={() => <FontAwesome5 name="building" size={20} color="#999" />}
        placeholder="Hostel Name"
        value={studentForm?.hostelName}
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, hostelName: value })
        }
        editable={edit}
      />
    </>
  );
};

export default StudentEdit;
