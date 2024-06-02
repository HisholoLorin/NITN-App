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

export const saveToken = async ({ access, refresh, usertype } = {}) => {
  await AsyncStorage.setItem("AccessToken", access);
  await AsyncStorage.setItem("RefreshToken", refresh);
  await AsyncStorage.setItem("UserType", usertype ? usertype : "student");
};

const validateField = (condition, message) => {
  if (condition) return { isVerified: false, message };
};

export const checkSignUp = (values, type) => {
  const {
    userName,
    mobileNo,
    email,
    dateOfBirth,
    gender,
    address,
    password,
    confirmPassword,
    // Students
    registrationNo,
    guardianMobileNumber,
    deptName,
    batch,
    bloodType,
    medicalConditions,
    ethnicity,
    hostelName,
    // Institute Personnel
    identificationNo,
    designation,
    department,
  } = values;

  const studentValidations = () => [
    validateField(
      !userName || userName.length < 5,
      "Username should be at least 5 characters long"
    ),
    validateField(!registrationNo, "Registration Number is required"),
    validateField(
      !mobileNo && !isMobileNumber(mobileNo),
      "Invalid Mobile Number"
    ),
    validateField(!email || !isEmail(email), "Invalid Email"),
    validateField(!dateOfBirth, "Date of Birth is required"),
    validateField(!gender, "Select Gender"),
    validateField(!bloodType, "Blood Type is required"),
    validateField(!medicalConditions, "Medical Conditions is required"),
    validateField(!ethnicity, "Ethnicity is required"),
    validateField(!address, "Address is required"),
    validateField(
      !guardianMobileNumber || !isMobileNumber(guardianMobileNumber),
      "Invalid Guardian Mobile Number"
    ),
    validateField(!deptName, "Department Name is required"),
    validateField(!batch, "Batch is required"),
    validateField(!hostelName, "Hostel Name is required"),
    validateField(!password || !isPassword(password), "Invalid Password"),
    validateField(
      !confirmPassword || password !== confirmPassword,
      "Password doesn't match"
    ),
  ];

  const personnelValidations = () => [
    validateField(
      !userName || userName.length < 5,
      "Username should be at least 5 characters long"
    ),
    validateField(!identificationNo, "Identification Number is required"),
    validateField(!designation, "Designation is required"),
    validateField(
      !mobileNo && !isMobileNumber(mobileNo),
      "Invalid Mobile Number"
    ),
    validateField(!email || !isEmail(email), "Invalid Email"),
    validateField(!dateOfBirth, "Date of Birth is required"),
    validateField(!gender, "Select Gender"),
    validateField(!address, "Address is required"),
    validateField(!department, "Department is required"),
    validateField(!password || !isPassword(password), "Invalid Password"),
    validateField(
      !confirmPassword || password !== confirmPassword,
      "Password doesn't match"
    ),
  ];

  const validations =
    type === "Students" ? studentValidations() : personnelValidations();

  for (let validation of validations) {
    if (validation) return validation;
  }

  return { isVerified: true };
};
