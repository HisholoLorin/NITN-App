import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getEndPoint from "../api/getEndPoint";
import { REFRESH_TOKEN } from "../constant/endpoint";
import { Alert } from "react-native";

//Helper
import { isTokenExpired } from "../helper/Token";
import { reset } from "../navigations/navigationRef";

const instance = axios.create({
  baseURL: "http://10.14.20.76:8000/api" //"https://nitn-hub.onrender.com/api", //"http://10.14.72.147:8000/api"
});

// Function to generate a new access token using the refresh token
const generateAccessToken = async (refreshToken) => {
  const response = await instance.post(getEndPoint(REFRESH_TOKEN), {
    refresh: refreshToken,
  });
  await AsyncStorage.setItem("AccessToken", response.data.access);
  return response.data.access;
};

// Request interceptor
instance.interceptors.request.use(
  async (config) => {
    const accessToken = await AsyncStorage.getItem("AccessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await AsyncStorage.getItem("RefreshToken");
      console.log("Before Condition");
      if (refreshToken && !isTokenExpired(refreshToken)) {
        console.log("Generating Refresh Token");
        const newAccessToken = await generateAccessToken(refreshToken);
        originalRequest.headers["Authorization"] = "Bearer " + newAccessToken;
        return instance(originalRequest);
      } else {
        console.log("Refresh Token Expired");
        await AsyncStorage.removeItem("AccessToken");
        await AsyncStorage.removeItem("RefreshToken");
        await AsyncStorage.removeItem("UserType");
        reset("Login");
        Alert.alert("Session Expired", "Please login again", [
          {
            text: "OK",
          },
        ]);
        throw new Error("Refresh token expired");
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
