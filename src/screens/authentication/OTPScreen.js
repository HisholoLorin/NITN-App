import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//Components
import OTPForm from "../../components/organisms/otpForm/Index";
import AppView from "../../components/atoms/AppView";


const OTPScreen = (props) => {
  return (
    <AppView {...props}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <OTPForm {...props} />
      </KeyboardAwareScrollView>
    </AppView>
  );
};

export default OTPScreen;
