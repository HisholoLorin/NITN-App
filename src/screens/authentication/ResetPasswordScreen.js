import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//Components
import ResetPasswordForm from "../../components/organisms/resetPasswordForm/Index";

import AppView from "../../components/atoms/AppView";

const ResetPasswordScreen = (props) => {

  return (
    <AppView {...props}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <ResetPasswordForm {...props} />
      </KeyboardAwareScrollView>
    </AppView>
  );
};

export default ResetPasswordScreen;
