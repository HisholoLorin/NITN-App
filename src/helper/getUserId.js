import AsyncStorage from "@react-native-async-storage/async-storage";

//Helper
import { decodeToken } from "./temporarySessionEvent";

export const getUserId = async () => {
  const AccessToken = await AsyncStorage.getItem("AccessToken");
  const payload = decodeToken(AccessToken);
  return payload?.user_id;
};
