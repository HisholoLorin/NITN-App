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
  CONTACT,
  STUDENT_UPDATE_PICTURE,
  STUDENT_DELETE_PICTURE,
  STUDENT_UPDATE_PROFILE,
  MAINTENANCE_UPDATE_PICTURE,
  MAINTENANCE_DELETE_PICTURE,
  MAINTENANCE_UPDATE_PROFILE,
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
          break;
        case "maintenance":
          response = await Api.get(getEndPoint(MAINTENANCE_DETAILS));
          break;
        case "management":
          response = await Api.get(getEndPoint(MANAGER_DETAILS));
          break;
      }
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(response.data);
      //return response.data;
    }
  }
);

export const updateProfile = createAsyncThunk(
  "updateProfile",
  async ({ data }, { dispatch }) => {
    try {
      Keyboard.dismiss();
      dispatch(runLoader());
      const usertype = await AsyncStorage.getItem("UserType");
      await temporarySessionEvent();
      let response;
      switch (usertype) {
        case "student":
          response = await Api.put(getEndPoint(STUDENT_UPDATE_PROFILE), {...data});
          break;
        case "maintenance":
          response = await Api.put(
            getEndPoint(MAINTENANCE_UPDATE_PROFILE),
            {...data}
          );
          break;
      }
      dispatch(getUserDetails({ type: usertype }));
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    } finally {
      dispatch(stopLoader());
      dispatch(setEdit(false));
    }
  }
);

export const updateProfilePicture = createAsyncThunk(
  "updateProfilePicture",
  async ({ result, onPress }, { dispatch }) => {
    let image = new FormData();
    const content = result.assets[0];
    const fileName = content.uri.replace(/^.*[\\\/]/, "");
    image.append("image", {
      uri:
        Platform.OS === "ios"
          ? content.uri.replace("file://", "")
          : content.uri,
      name: fileName,
      type: content.mimeType,
    });
    onPress();
    try {
      dispatch(runLoader());
      const usertype = await AsyncStorage.getItem("UserType");
      await temporarySessionEvent();
      let response;
      switch (usertype) {
        case "student":
          response = await Api.put(getEndPoint(STUDENT_UPDATE_PICTURE), image, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          break;
        case "maintenance":
          response = await Api.put(
            getEndPoint(MAINTENANCE_UPDATE_PICTURE),
            image,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          break;
      }
      dispatch(getUserDetails({ type: usertype }));
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
  async (_, { dispatch }) => {
    try {
      dispatch(runLoader());
      const usertype = await AsyncStorage.getItem("UserType");
      await temporarySessionEvent();
      let response;
      switch (usertype) {
        case "student":
          response = await Api.delete(getEndPoint(STUDENT_DELETE_PICTURE));
          break;
        case "maintenance":
          response = await Api.delete(getEndPoint(MAINTENANCE_DELETE_PICTURE));
          break;
      }
      dispatch(getUserDetails({ type: usertype }));
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    } finally {
      dispatch(stopLoader());
    }
  }
);

export const contact = createAsyncThunk("contact", async (_, { dispatch }) => {
  try {
    dispatch(runLoader());
    await temporarySessionEvent();
    const response = await Api.get(getEndPoint(CONTACT));
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err.response.data);
  } finally {
    dispatch(stopLoader());
  }
});

const userSlice = createSlice({
  name: "UserActions",
  initialState: {
    userDetails: {},
    contactList: null,
    next: null,
    edit: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setEdit: (state, action) => {
      state.edit = action.payload;
    },
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
      })
      //Contact
      .addCase(contact.fulfilled, (state, action) => {
        state.contactList = action?.payload?.results;
        state.next = action?.payload?.next;
      });
  },
});

export const { clearError, setEdit } = userSlice.actions;
export default userSlice.reducer;
