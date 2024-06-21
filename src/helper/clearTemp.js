import { clearError as clearAuthError } from "../redux/auth";
import { clearError as clearUserError } from "../redux/user";
import { clearError as clearFormError } from "../redux/form";
import { setEdit } from "../redux/user";

import { useDispatch } from "react-redux";

export const clearTempListener = ({ navigation }) => {
  const dispatch = useDispatch();
  navigation.addListener("focus", () => {
    dispatch(clearAuthError());
    dispatch(clearUserError());
    dispatch(clearFormError());
    dispatch(setEdit(false));
  });
};
