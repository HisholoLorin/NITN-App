import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//Components
import SignupForm from "../../components/organisms/signupForm/Index";

import AppView from "../../components/atoms/AppView";

const SignupScreen = (props) => {
  return (
    <AppView {...props}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <SignupForm {...props} />
      </KeyboardAwareScrollView>
    </AppView>
  );
};

export default SignupScreen;
