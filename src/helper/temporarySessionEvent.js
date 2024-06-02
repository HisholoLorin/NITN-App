import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate, reset } from "../navigations/navigationRef";
import Api from "../api/API";
import getEndPoint from "../api/getEndPoint";
import { REFRESH_TOKEN } from "../constant/endpoint";
import { Buffer } from "buffer";

//This function generates a new access token using the refresh token everytime the access token expires
const generateAccessToken = async (refresh) => {
  const response = await Api.post(getEndPoint(REFRESH_TOKEN), {
    refresh,
  });
  console.log(response.data);
  await AsyncStorage.setItem("AccessToken", response.data.access_token);
};

const decodeToken = (refreshToken) => {
  const arrayToken = refreshToken.split(".");
  const tokenPayload = JSON.parse(
    Buffer.from(arrayToken[1], "base64").toString("utf8")
  );
  return tokenPayload;
};

export const isTokenExpired = (refreshToken) => {
  const tokenPayload = decodeToken(refreshToken);
  const currentTime = Math.floor(Date.now() / 1000);
  return currentTime + 60 > tokenPayload.exp;
};

export default async () => {
  const refreshToken = await AsyncStorage.getItem("RefreshToken");
  const accessToken = await AsyncStorage.getItem("AccessToken");

  if (isTokenExpired(accessToken)) {
    try {
      await generateAccessToken(refreshToken);
    } catch (err) {
      await AsyncStorage.removeItem("AccessToken");
      await AsyncStorage.removeItem("RefreshToken");
      reset("Login");
      Alert.alert("Session Expired", "Please Login again", [{ text: "Ok" }]);
    }
  }
};
