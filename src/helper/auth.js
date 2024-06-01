import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const isMobileNumber = (mobileNumber) => {
  if (/^\d{10}$/.test(mobileNumber)) return true;
  else return false;
};

export const mobileNumberFormate = (countryCode, mobileNumber) => {
  return countryCode + "-" + mobileNumber;
};

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
};

export const saveToken = async ({ access_token, refresh_token }) => {
  await AsyncStorage.setItem("AccessToken", access_token);
  await AsyncStorage.setItem("RefreshToken", refresh_token);
};

export const checkSignUp = (values, type) => {
  const {
    username,
    mobileNo,
    email,
    dateOfBirth,
    gender,
    address,
    password,
    confirmPassword,
  } = values;

  if (!username || username.length < 5)
    return {
      isVerified: false,
      message: "Username should be atleast 5 characters long",
    };
  else if (!email || !isEmail(email))
    return { isVerified: false, message: "Invalid Email" };
  else if (!password || !isPassword(password))
    return { isVerified: false, message: "Invalid Password" };
  else if (!confirmPassword || password !== confirmPassword)
    return { isVerified: false, message: "Password doesn't match" };
  else if (mobileNo && !isMobileNumber(mobileNo))
    return { isVerified: false, message: "Invalid Mobile Number" };
  else if (!dateOfBirth)
    return { isVerified: false, message: "Date of Birth is required" };
  else if (!gender) return { isVerified: false, message: "Select Gender" };
  else if (!address)
    return { isVerified: false, message: "Address is required" };

  switch (type) {
    case "Students":
      const {
        registrationNo,
        guardianMobileNumber,
        deptName,
        batch,
        bloodType,
        medicalConditions,
        ethnicity,
        hostelName,
      } = values;
      console.log(registrationNo);
      if (registrationNo === undefined)
        return {
          isVerified: false,
          message: "Registration Number is required",
        };
      else if (!guardianMobileNumber || !isMobileNumber(guardianMobileNumber))
        return {
          isVerified: false,
          message: "Invalid Guardian Mobile Number",
        };
      else if (!deptName)
        return { isVerified: false, message: "Department Name is required" };
      else if (!batch)
        return { isVerified: false, message: "Batch is required" };
      else if (!bloodType)
        return { isVerified: false, message: "Blood Type is required" };
      else if (!medicalConditions)
        return { isVerified: false, message: "Medical Conditions is required" };
      else if (!ethnicity)
        return { isVerified: false, message: "Ethnicity is required" };
      else if (!hostelName)
        return { isVerified: false, message: "Hostel Name is required" };
      console.log("Iam here");
    // return { isVerified: true };
    case "Institute Personnel":
      const { identificationNo, designation, department } = values;
      if (!identificationNo)
        return {
          isVerified: false,
          message: "Identification Number is required",
        };
      else if (!designation)
        return { isVerified: false, message: "Designation is required" };
      else if (!department)
        return { isVerified: false, message: "Department is required" };
      else return { isVerified: true };
  }
};
