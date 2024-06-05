import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import Api from "../api/API";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Helper Functions
import temporarySessionEvent from "../helper/temporarySessionEvent";

//EndPoints
import getEndPoint from "../api/getEndPoint";
import {
  STUDENT_FORM_LIST,
  STUDENT_CREATE_FORM,
  STUDENT_DELETE_FORM,
  MANAGER_FORM_LIST,
  MAINTENANCE_FORM_LIST,
} from "../constant/endpoint";

//Action
import { runLoader, stopLoader } from "./process";

export const fetchFormList = createAsyncThunk(
  "fetchFormList",
  async ({ page }, { dispatch }) => {
    console.log(page);
    try {
      dispatch(runLoader());
      const usertype = await AsyncStorage.getItem("UserType");
      await temporarySessionEvent();
      console.log(usertype);
      let response;
      switch (usertype) {
        case "student":
          response = await Api.get(getEndPoint(STUDENT_FORM_LIST, page));
          break;
        case "maintenance":
          response = await Api.get(getEndPoint(MAINTENANCE_FORM_LIST, page));
          break;
        case "management":
          response = await Api.get(getEndPoint(MANAGER_FORM_LIST, page));
          break;
      }
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      if (!err.response)
        Alert.alert("Alert!", "No Internet Connection", [
          {
            text: "Ok",
          },
        ]);
    } finally {
      dispatch(stopLoader());
    }
  }
);

export const createForm = createAsyncThunk(
  "createForm",
  async ({ title, description }, { rejectWithValue, dispatch }) => {
    try {
      dispatch(runLoader());
      await temporarySessionEvent();
      const response = await Api.post(getEndPoint(STUDENT_CREATE_FORM), {
        title,
        description,
      });
      console.log(response.data);
      Alert.alert("", response.data, [
        {
          text: "Ok",
        },
      ]);
      dispatch(fetchFormList({ page: 1 }));
    } catch (error) {
      console.log(error.response.data);
      if (!err.response)
        Alert.alert("Alert!", "No Internet Connection", [
          {
            text: "Ok",
          },
        ]);
    } finally {
      dispatch(stopLoader());
    }
  }
);

export const deleteForm = createAsyncThunk(
  "deleteForm",
  async ({ uuid }, { rejectWithValue, dispatch }) => {
    try {
      dispatch(runLoader());
      await temporarySessionEvent();
      const response = await Api.delete(getEndPoint(STUDENT_DELETE_FORM, uuid));
      console.log(response.data);
      dispatch(fetchFormList({ page: 1 }));
    } catch (error) {
      console.log(error.response.data);
      if (!err.response)
        Alert.alert("Alert!", "No Internet Connection", [
          {
            text: "Ok",
          },
        ]);
    } finally {
      dispatch(stopLoader());
    }
  }
);

const formSlice = createSlice({
  name: "processActions",
  initialState: {
    formList: null,
    next: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      //Form List
      .addCase(fetchFormList.fulfilled, (state, action) => {
        state.formList = action?.payload?.results;
        state.next = action?.payload?.next;
      });
  },
});

export const {} = formSlice.actions;
export default formSlice.reducer;
