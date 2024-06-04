import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import { useState, useEffect } from "react";

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
import CustomInput from "../../../components/molecules/customInput/Index";
import CustomPicker from "../../../components/molecules/customPicker/Index";
import CustomDatePicker from "../../../components/molecules/customDatePicker/Index";
import PrimaryButton from "../../molecules/primaryButton/Index";

//Redux
import { useSelector, useDispatch } from "react-redux";

//Helper
import { convertToShortDateFormat } from "../../../helper/dateTimeFormats";

//Styled Components
import {
  ViewContainer,
  ProfilePicture,
  CameraIcon,
  ProfilePictureContainer,
  ProfileBackground,
} from "./Styles";

const ProfileForm = () => {
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
  const [studentForm, setStudentForm] = useState({});
  const { userDetails } = useSelector((state) => state.UserReducer);
  const { edit } = useSelector((state) => state.UserReducer);
  const {
    user: { userName, mobileNo, email } = {},
    student: {
      image,
      registrationNo,
      hostelName,
      deptName,
      batch,
      dateOfBirth,
      gender,
      bloodType,
      medicalConditions,
      guardianMobileNumber,
      ethnicity,
      address,
    } = {},
  } = userDetails || {};

  useEffect(() => {
    setStudentForm({
      userName,
      mobileNo,
      email,
      registrationNo,
      hostelName,
      deptName,
      batch,
      dateOfBirth,
      gender,
      bloodType,
      medicalConditions,
      guardianMobileNumber,
      ethnicity,
      address,
    });
  }, []);

  const handlePress = () => {
    console.log("Save Changes");
  };

  return (
    <>
      <ProfilePictureContainer>
        <ProfileBackground />
        <View>
          <ProfilePicture
            source={
              image
                ? { uri: image }
                : require("../../../../assets/profilePhoto.jpg")
            }
          />
          <TouchableWithoutFeedback onPress={() => {}}>
            <CameraIcon name="camera" />
          </TouchableWithoutFeedback>
        </View>
      </ProfilePictureContainer>

      <ViewContainer>
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
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color="#999"
            />
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
          icon={() => (
            <FontAwesome6 name="people-group" size={20} color="#999" />
          )}
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
            <MaterialCommunityIcons
              name="home-outline"
              size={20}
              color="#999"
            />
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

        {edit && <PrimaryButton text="Save Changes" onPress={handlePress}/>}
      </ViewContainer>
    </>
  );
};

export default ProfileForm;
