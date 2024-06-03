import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../api/API";

//Helper Functions
import temporarySessionEvent from "../helper/temporarySessionEvent";

//EndPoints
import getEndPoint from "../api/getEndPoint";
import { STUDENT_FORM_LIST } from "../constant/endpoint";

//Action
import { runLoader, stopLoader } from "./process";

export const fetchFormList = createAsyncThunk(
  "fetchFormList",
  async ({ page }, { rejectWithValue, dispatch }) => {
    try {
      await temporarySessionEvent();
      const response = await Api.get(getEndPoint(STUDENT_FORM_LIST, page));
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
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
