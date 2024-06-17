import React from "react";
import { useState, useCallback } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RefreshControl } from "react-native";

//Components
import AppView from "../../../components/atoms/AppView";
import ProfileForm from "../../../components/organisms/profileForm/Index";

//Redux
import { useDispatch } from "react-redux";
import { getUserDetails } from "../../../redux/user";

const ProfileScreen = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getUserDetails());
    setRefreshing(false);
  }, []);
  return (
    <AppView {...props}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ProfileForm {...props} />
      </KeyboardAwareScrollView>
    </AppView>
  );
};

export default ProfileScreen;
