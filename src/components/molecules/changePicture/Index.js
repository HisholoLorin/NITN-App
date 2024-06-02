import {
  FormContainer,
  Bold,
  TextCenter,
  IconContainer,
  CameraIcon,
  GalaryIcon,
  DeleteIcon,
} from "./Styles";
import Spacer from "../../atoms/spacer/Index";
import { TouchableOpacity, Alert, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

//Redux
import { useDispatch, useSelector } from "react-redux";
import {
  updateProfilePicture,
  deleteProfilePicture,
} from "../../../redux/user";

const ChangePicture = ({ onPress }) => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.UserReducer);
  const { userName, image } = userDetails;

  const camera = async () => {
    try {
      //await ImagePicker.requestCameraPermissionsAsync();
      const result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.front,
        allowsEditing: true,
        aspect: [1, 1],
        UIImagePickerControllerQualityType: 4,
      });
      dispatch(updateProfilePicture({ result, userName }));
    } catch (error) {
      console.log(error);
    } finally {
      onPress();
    }
  };

  const pickImage = async () => {
    try {
      //await ImagePicker.requestMediaLibraryPermissionsAsync();
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        UIImagePickerControllerQualityType: 4,
      });

      //`data:${result.assets[0].type};base64,${result.assets[0].base64}`;
      dispatch(updateProfilePicture({ result, userName }));
    } catch (error) {
      console.log(error);
    } finally {
      onPress();
    }
  };

  const deleteImage = async () => {
    Alert.alert("", "Remove Profile Picture?", [
      {
        text: "Yes",
        onPress: () => {
          try {
            dispatch(deleteProfilePicture({ userName }));
          } catch (error) {
            console.log(error);
          } finally {
            onPress();
          }
        },
      },
      {
        text: "No",
      },
    ]);
  };

  return (
    <FormContainer>
      <Spacer>
        <Bold style={{ fontSize: 20 }}>Profile Photo</Bold>
      </Spacer>

      <IconContainer>
        <TouchableOpacity onPress={camera}>
          <View>
            <CameraIcon name="camera" />
            <TextCenter>Camera</TextCenter>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={pickImage}>
          <View>
            <GalaryIcon name="picture-o" />
            <TextCenter>Gallery</TextCenter>
          </View>
        </TouchableOpacity>

        {image && (
          <TouchableOpacity onPress={deleteImage}>
            <View>
              <DeleteIcon name="delete" />
              <TextCenter>Delete</TextCenter>
            </View>
          </TouchableOpacity>
        )}
      </IconContainer>
    </FormContainer>
  );
};

export default ChangePicture;
