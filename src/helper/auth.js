import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const isMobileNumber = (mobileNumber) => {
  if (/^\+[0-9]{1,3}-[0-9]{10}$/.test(mobileNumber)) return true;
  else return false;
};

export const mobileNumberFormate = (countryCode, mobileNumber) => {
  return countryCode+"-"+mobileNumber;
}

export const isEmail = (email) => {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return true;
  else return false;
};

export const isPassword = (password) => {
  if (/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}/.test(password)) return true;
  else {
    Alert.alert(
      "Password should contain atleast :",
      "*lowercase letter.\n*uppercase letter.\n*one digit.\n*one non-alphanumeric character.\n*8 characters long.",
      [{ text: "Ok" }]
    );
    return false;
  }
};

export const isDob = (dob) => {
  if (/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/.test(dob)) {
    const [day, month, year] = dob.split("-").map(Number);
    const monthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year <= new Date().getFullYear() && year >= 1900) {
      //For leap year
      if (year % 4 == 0 && day <= 29 && month == 2) return true;
      //For non leap year
      else if (day <= monthList[month - 1] && month <= 12 && month > 0)
        return true;
      else return false;
    } else return false;
  } else return false;
};

export const capitalizedFirstLetter = (value) => {
  const values = value.split(" ");
  value = values.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
  return value.join(" ");
}

export const saveToken = async ({ access_token , refresh_token }) => {
  
  await AsyncStorage.setItem("AccessToken", access_token);
  await AsyncStorage.setItem("RefreshToken", refresh_token);
};
