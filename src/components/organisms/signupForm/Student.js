import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";

import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  FontAwesome6,
} from "@expo/vector-icons";

//Components
import CustomInput from "../../molecules/customInput/Index";
import CustomPicker from "../../molecules/customPicker/Index";
import PasswordInput from "../../molecules/passwordInput/Index";
import CustomDatePicker from "../../molecules/customDatePicker/Index";

const StudentForm = ({ studentForm, setStudentForm }) => {
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
      />

      {/* Date of Birth */}
      <CustomDatePicker
        state={studentForm?.dateOfBirth}
        setState={(value) =>
          setStudentForm({
            ...studentForm,
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
      />

      {/* Blood Type */}
      <CustomInput
        icon={() => <MaterialIcons name="bloodtype" size={20} color="#999" />}
        placeholder="Blood Type"
        value={studentForm?.bloodType}
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, bloodType: value })
        }
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
      />

      {/* Ethnicity */}
      <CustomInput
        icon={() => <FontAwesome6 name="people-group" size={20} color="#999" />}
        placeholder="Ethnicity"
        value={studentForm.ethnicity}
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, ethnicity: value })
        }
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
      />

      {/* Hostel Name */}
      <CustomInput
        icon={() => <FontAwesome5 name="building" size={20} color="#999" />}
        placeholder="Hostel Name"
        value={studentForm?.hostelName}
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, hostelName: value })
        }
      />

      {/* Password */}
      <PasswordInput
        placeholder="Password"
        value={studentForm?.password}
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, password: value })
        }
      />

      {/* Confirm Password */}
      <PasswordInput
        placeholder="Confirm Password"
        value={studentForm?.confirmPassword}
        onChangeText={(value) =>
          setStudentForm({ ...studentForm, confirmPassword: value })
        }
      />
    </>
  );
};

export default StudentForm;
