//Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { navigate, reset } from "../navigations/navigationRef";
//API
import Api from "../api/API";

import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Keyboard } from "react-native";

//Action
import { runLoader, stopLoader } from "./process";

//EndPoints
import getEndPoint from "../api/getEndPoint";
import {
  LOGIN,
  SIGNUP,
  VERIFY_OTP_FOR_SIGNUP,
  VERIFY_OTP_FOR_FORGOT_PASSWORD,
  FORGOT_PASSWORD,
  CHANGE_PASSWORD,
} from "../constant/endpoint";

//Helper
import { isMobileNumber, isEmail, isPassword, saveToken } from "../helper/auth";

//Local login when there is a token in the async storage
export const localLogin = createAsyncThunk("localLogin", async () => {
  const accessToken = await AsyncStorage.getItem("AccessToken");
  if (accessToken) {
    reset("Drawer");
  } else reset("Login");
});

export const logout = createAsyncThunk("logout", async () => {
  Alert.alert("Alert!", "Are you sure you want to log out?", [
    {
      text: "Yes",
      onPress: async () => {
        // const refresh = await AsyncStorage.getItem("RefreshToken");
        // await AsyncStorage.removeItem("AccessToken");
        // await AsyncStorage.removeItem("RefreshToken");
        reset("Login");
      },
    },
    {
      text: "No",
    },
  ]);
});

export const login = createAsyncThunk(
  "login",
  async ({ username, password }, { dispatch, rejectWithValue }) => {
    reset("Drawer");
    // try {
    //   dispatch(runLoader());
    //   Keyboard.dismiss();
    //   if (username.length === 0)
    //     return rejectWithValue("Username cannot be blank");
    //   else if (password.length === 0)
    //     return rejectWithValue("Password cannot be blank");
    //   else {
    //     const response = await Api.post(
    //       getEndPoint(LOGIN),
    //       {
    //         username,
    //         password,
    //       },
    //       { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    //     );
    //     await saveToken(response.data);
    //     reset("Drawer");
    //   }
    // } catch (err) {
    //   console.log(err.response);
    //   if (!err.response) return rejectWithValue("No Internet Connection");
    //   else return rejectWithValue(err.response.data.detail);
    // } finally {
    //   dispatch(stopLoader());
    // }
  }
);

export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async ({ email }, { dispatch, rejectWithValue }) => {
    console.log("call");
    navigate("OTP", { email });
    // try {
    //   dispatch(runLoader());
    //   Keyboard.dismiss();
    //   if (username.length === 0)
    //     return rejectWithValue("Username cannot be blank");
    //   const response = await Api.post(getEndPoint(FORGOT_PASSWORD), {
    //     username: username,
    //   });
    //   console.log(response.data);
    //   const otpId = response.data.otpId;
    //   navigate("OTP", { username, mode: "ForgotPassword", otpId });
    // } catch (err) {
    //   console.log(err.response.data);
    //   if (!err.response) return "No Internet Connection";
    //   else return rejectWithValue(err.response.data.detail);
    // } finally {
    //   dispatch(stopLoader());
    // }
  }
);

export const verifyOTP = createAsyncThunk(
  "verifyOTP",
  async ({ otp, email }, { dispatch, rejectWithValue }) => {
    navigate("ResetPassword");
    // try {
    //   dispatch(runLoader());
    //   Keyboard.dismiss();

    //   otp = otp.join("");
    //   if (otp.length !== 4) return rejectWithValue("OTP must be 4 digits.");

    //   otp = Number(otp);
    //   let response;
    //   switch (mode) {
    //     case "ForgotPassword":
    //       response = await Api.post(
    //         getEndPoint(VERIFY_OTP_FOR_FORGOT_PASSWORD),
    //         { otp }
    //       );
    //       navigate("ResetPassword", { otpId });
    //       break;
    //     case "Signup":
    //       response = await Api.post(getEndPoint(VERIFY_OTP_FOR_SIGNUP), {
    //         otp,
    //       });
    //       console.log(response.data);
    //       await saveToken(response.data);
    //       reset("Drawer");
    //       break;
    //   }
    // } catch (err) {
    //   if (!err.response) return rejectWithValue("No Internet Connection");
    //   else return rejectWithValue(err.response.data.detail);
    // } finally {
    //   dispatch(stopLoader());
    // }
  }
);

export const changePassword = createAsyncThunk(
  "changePassword",
  async ({ password, retypePassword }, { dispatch, rejectWithValue }) => {
    //   if (!isPassword(password)) return rejectWithValue("Invalid Password");
    //   else if (password !== retypePassword)
    //     return rejectWithValue("Password does not match.");
    //   try {
    //     dispatch(runLoader());
    //     Keyboard.dismiss();
    //     response = await Api.post(getEndPoint(CHANGE_PASSWORD), {
    //       otpId,
    //       password,
    //       retypePassword,
    //     });
    //     reset("Login");
    //     Alert.alert("", "Password Changed Successfully. Please Login.", [
    //       { text: "OK" },
    //     ]);
    //   } catch (err) {
    //     if (!err.response) return rejectWithValue("No Internet Connection.");
    //     else return rejectWithValue(err.response.data.detail);
    //   } finally {
    //     dispatch(stopLoader());
    //   }
  }
);

export const signup = createAsyncThunk(
  "signup",
  async ({ ...values }, { dispatch, rejectWithValue }) => {
    console.log(values);
    const { type } = values;
    switch (type) {
      case "students":
        const {
          username,
          registrationNo,
          mobileNo,
          email,
          password,
          confirmPassword,
          dateOfBirth,
          gender,
          bloodType,
          medicalConditions,
          ethnicity,
          address,
          guardianMobileNumber,
          deptName,
          batch,
          hostelName,
        } = values;

      case "staffs":
    }
    try {
      dispatch(runLoader());
      Keyboard.dismiss();
      if (fullname.length < 5)
        return rejectWithValue("Fullname must be more than 5 characters");
      else if (!isEmail(email)) return rejectWithValue("Invalid Email");
      else if (!isPassword(password))
        return rejectWithValue("Invalid Password");
      else if (password !== retypePassword)
        return rejectWithValue("Password does not match");
      else {
        const response = await Api.post(getEndPoint(SIGNUP), {
          ...values,
        });
        console.log(response.data);
        const otpId = response.data.otpId;
        navigate("OTP", { values, mode: "Signup", otpId });
      }
    } catch (err) {
      if (!err.response) return "No Internet Connection";
      else console.log(err.response.data);
    } finally {
      dispatch(stopLoader());
    }
  }
);

const authSlice = createSlice({
  name: "authActions",
  initialState: { error: null },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      //Login
      .addCase(login.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      })
      //Forgot Password
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.error = action.payload;
      })
      //OTP Verification
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.error = action.payload;
      })
      //ChangePassword
      .addCase(changePassword.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.error = action.payload;
      })
      //Signup
      .addCase(signup.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
