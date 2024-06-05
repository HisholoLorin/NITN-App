import React from "react";
import { View, TouchableWithoutFeedback, BackHandler } from "react-native";
import { useState, useEffect, useRef, useCallback } from "react";
import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";

//Components
import PrimaryButton from "../../molecules/primaryButton/Index";
import ChangePicture from "../../molecules/changePicture/Index";
import StudentEdit from "./StudentEdit";
import MaintenanceEdit from "./MaintenanceEdit";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../../redux/user";

//Helper
import { previousScreen } from "../../../navigations/navigationRef";

//Styled Components
import {
  ViewContainer,
  ProfilePicture,
  CameraIcon,
  ProfilePictureContainer,
  ProfileBackground,
} from "./Styles";

const ProfileForm = ({ route }) => {
  
  const dispatch = useDispatch();
  const [studentForm, setStudentForm] = useState({});
  const [maintenanceForm, setMaintenanceForm] = useState(false);
  const { edit, userDetails } = useSelector((state) => state.UserReducer);
  const { user, student, maintenance } = userDetails || {};
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
  const studentDetails = {
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
  };

  const maintenanceDetails = {
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
  };

  useEffect(() => {
    student && setStudentForm(studentDetails);
    maintenance && setMaintenanceForm(maintenanceDetails);
  }, []);

  const bottomSheetModalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handlePress = () => {
    setCurrentIndex(0);
    bottomSheetModalRef.current?.present();
  };

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
        onPress={onBackPress}
      />
    ),
    []
  );

  const onBackPress = () => {
    if (bottomSheetModalRef) {
      bottomSheetModalRef.current?.close();
      setCurrentIndex(-1);
      return BackHandler.addEventListener("hardwareBackPress", () => {
        previousScreen();
        return true;
      });
    }
  };

  useEffect(() => {
    if (currentIndex !== -1) {
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
    }
  }, [currentIndex]);

  const handleSave = () => {
    student && dispatch(updateProfile({ data: studentForm }));
    maintenance && dispatch(updateProfile({ data: maintenanceForm }));
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
          <TouchableWithoutFeedback onPress={handlePress}>
            <CameraIcon name="camera" />
          </TouchableWithoutFeedback>
        </View>
      </ProfilePictureContainer>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={currentIndex}
        snapPoints={["25%"]}
        backgroundStyle={{
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
        backdropComponent={renderBackdrop}
        onDismiss={onBackPress}
      >
        <ChangePicture onPress={onBackPress} image={image} />
      </BottomSheetModal>

      <ViewContainer>
        {student && (
          <StudentEdit
            studentForm={studentForm}
            setStudentForm={setStudentForm}
            edit={edit}
          />
        )}

        {maintenance && (
          <MaintenanceEdit
            maintenanceForm={maintenanceForm}
            setMaintenanceForm={setMaintenanceForm}
            edit={edit}
          />
        )}

        {edit && <PrimaryButton text="Save Changes" onPress={handleSave} />}
      </ViewContainer>
    </>
  );
};

export default ProfileForm;
