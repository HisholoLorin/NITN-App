import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//Components
import AppView from "../../../components/atoms/AppView";
import ProfileForm from "../../../components/organisms/profileForm/Index";

const ProfileScreen = (props) => {
  return (
    <AppView {...props}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <ProfileForm {...props} />
      </KeyboardAwareScrollView>
    </AppView>
  );
};

export default ProfileScreen;
