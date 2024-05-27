import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate, reset } from "../navigations/navigationRef";
import Api from "../api/API";
import getEndPoint from "../api/getEndPoint";
import { REFRESH_TOKEN } from "../constant/endpoint";

//This function generates a new access token using the refresh token everytime the access token expires
const generateAccessToken = async () => {
  const refreshToken = await AsyncStorage.getItem("RefreshToken");
  const response = await Api.post(getEndPoint(REFRESH_TOKEN), null, {
    headers: { refreshToken },
  });
  await AsyncStorage.setItem("AccessToken", response.data.access_token);
};

export default async (err, END_POINT) => {
  if (err.response.status === 401) {
    try {
      await generateAccessToken();
      response = await Api.get(getEndPoint(END_POINT));
      return response;
    } catch (err) {
      await AsyncStorage.removeItem("AccessToken");
      await AsyncStorage.removeItem("RefreshToken");
      reset("Login");
      Alert.alert("Session Expired", "Please Login again", [{ text: "Ok" }]);
    }
  } else Alert.alert("Error", err.message, [{ text: "Ok" }]);
};
