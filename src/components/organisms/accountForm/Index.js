import { TouchableWithoutFeedback, View, BackHandler } from "react-native";
import { useRef, useState, useCallback, useEffect } from "react";
import "react-native-gesture-handler";
import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";

//Components
import Title from "../../atoms/title/Index";
import Divider from "../../atoms/divider/Index";
import UserDetail from "../../atoms/userDetail/Index";
import {
  ViewContainer,
  CameraIcon,
  ProfilePicture,
  ProfilePictureContainer,
} from "./Styles";
import ChangePicture from "../../molecules/changePicture/Index";

//Redux
import { useSelector } from "react-redux";

//Helper
import { previousScreen } from "../../../navigations/navigationRef";

const AccountForm = ({ navigation }) => {
  const bottomSheetModalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const { userDetails } = useSelector((state) => state.UserReducer);
  const { username, email, image } = userDetails;

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

  return (
    <>
      <ViewContainer>
        <Title>Account</Title>

        <ProfilePictureContainer>
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
      </ViewContainer>

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
        <ChangePicture onPress={onBackPress} />
      </BottomSheetModal>

      <View style={{marginTop : 20}}/>
      <ViewContainer>
        <UserDetail label="Name" value={username} onPress={() => {}} />
      </ViewContainer>

      <Divider top={10} />
      <ViewContainer>
        <UserDetail
          label="Email"
          value={email}
          onPress={() => navigation.navigate("ChangeEmail")}
        />
      </ViewContainer>

      <Divider top={10}/>
    </>
  );
};

export default AccountForm;
