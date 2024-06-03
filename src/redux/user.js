import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Alert, Platform, Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate, reset } from "../navigations/navigationRef";
import Api from "../api/API";

//Helper Functions
import temporarySessionEvent from "../helper/temporarySessionEvent";

//EndPoints
import getEndPoint from "../api/getEndPoint";
import {
  STUDENT_DETAILS,
  MAINTENANCE_DETAILS,
  MANAGER_DETAILS,
} from "../constant/endpoint";

//Action
import { runLoader, stopLoader } from "./process";

//Helper
import { isMobileNumber, isEmail, isDob } from "../helper/auth";

//1st parameter : prefix for the generated action types
//2nd parameter : a function that returns a promise of the value we want to fetch
export const getUserDetails = createAsyncThunk(
  "getUserDetails",
  async ({ type }) => {
    console.log("User Details trigger");
    try {
      await temporarySessionEvent();
      let response;
      switch (type) {
        case "student":
          response = await Api.get(getEndPoint(STUDENT_DETAILS));
          return response.data;
        case "maintenance":
          response = await Api.get(getEndPoint(MAINTENANCE_DETAILS));
          return response.data;
        case "management":
          response = await Api.get(getEndPoint(MANAGER_DETAILS));
          return response.data;
      }
    } catch (err) {
      console.log(response.data);
      //return response.data;
    }
  }
);

export const updateProfilePicture = createAsyncThunk(
  "updateProfilePicture",
  async ({ result, userName }, { dispatch }) => {
    let random = " {" + (Math.random() + 1).toString(36).substring(7) + "}";
    let image = new FormData();
    const content = result.assets[0];
    image.append("image", {
      uri:
        Platform.OS === "ios"
          ? content.uri.replace("file://", "")
          : content.uri,
      name: userName + random + "." + content.mimeType.split("/")[1],
      type: content.mimeType,
    });
    try {
      dispatch(runLoader());
      const response = await Api.put(
        getEndPoint(UPDATE_PROFILE_PICTURE),
        image,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      const response = await temporarySessionEvent(err, PROFILE_PICTURE_UPDATE);
      return response.data;
    } finally {
      dispatch(stopLoader());
    }
  }
);

export const deleteProfilePicture = createAsyncThunk(
  "deleteProfilePicture",
  async ({}, { dispatch }) => {
    try {
      dispatch(runLoader());
      const response = await Api.delete(getEndPoint(DELETE_PROFILE_PICTURE));
      console.log(response.data);
      return response.data;
    } catch (err) {
      const response = await temporarySessionEvent(err, DELETE_PROFILE_PICTURE);
      return response.data;
    } finally {
      dispatch(stopLoader());
    }
  }
);

const userSlice = createSlice({
  name: "UserActions",
  initialState: {
    userDetails: {},
    edit: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setEdit : (state, action) => {
      state.edit = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      //User Details
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.userDetails = action?.payload;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.error = action?.payload;
      })
      //Update Profile Picture
      .addCase(updateProfilePicture.fulfilled, (state, action) => {
        state.userDetails = action?.payload;
      })
      .addCase(updateProfilePicture.rejected, (state, action) => {
        state.error = action?.payload;
      })
      //Delete Profile Picture
      .addCase(deleteProfilePicture.fulfilled, (state, action) => {
        state.userDetails = action?.payload;
      })
      .addCase(deleteProfilePicture.rejected, (state, action) => {
        state.error = action?.payload;
      });
  },
});

export const { clearError, setEdit } = userSlice.actions;
export default userSlice.reducer;
