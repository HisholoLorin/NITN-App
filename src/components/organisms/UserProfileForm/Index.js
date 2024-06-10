import React from "react";
import { useState, useEffect } from "react";

//Components
import StudentView from "./StudentView";
import MaintenanceView from "./MaintenanceView";

//Redux
import { useSelector } from "react-redux";

//Styled Components
import {
  ViewContainer,
  ProfilePicture,
  ProfilePictureContainer,
  ProfileBackground,
} from "./Styles";

const UserProfileForm = ({ route }) => {
  const [studentForm, setStudentForm] = useState({});
  const [maintenanceForm, setMaintenanceForm] = useState(false);
  const { edit } = useSelector((state) => state.UserReducer);
  const { user, student, maintenance } = route?.params || {};
  const { userName, mobileNo, email } = user || {};
  const {
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
  } = student || {};
  const { identificationNo, designation, department } = maintenance || {};

  useEffect(() => {
    student &&
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
    maintenance &&
      setMaintenanceForm({
        userName,
        mobileNo,
        email,
        dateOfBirth: maintenance?.dateOfBirth,
        image: maintenance?.image,
        gender: maintenance?.gender,
        address: maintenance?.address,
        identificationNo,
        designation,
        department,
      });
  }, []);

  return (
    <>
      <ProfilePictureContainer>
        <ProfileBackground />

        <ProfilePicture
          source={
            image
              ? { uri: image }
              : require("../../../../assets/profilePhoto.jpg")
          }
        />
      </ProfilePictureContainer>

      <ViewContainer>
        {student && (
          <StudentView
            studentForm={studentForm}
            setStudentForm={setStudentForm}
            edit={edit}
          />
        )}

        {maintenance && (
          <MaintenanceView
            maintenanceForm={maintenanceForm}
            setMaintenanceForm={setMaintenanceForm}
            edit={edit}
          />
        )}

      </ViewContainer>
    </>
  );
};

export default UserProfileForm;
