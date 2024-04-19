import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "https://pineapple-predict.me",
});

//first function is call automatically when we make a request
//second function is call automatically whenever there is an error when making a request
//like no internet connection
instance.interceptors.request.use(
  async (config) => {
    const accessToken = await AsyncStorage.getItem("AccessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
