import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//Components
import LoginForm from "../../components/organisms/loginForm/Index";
import AppView from "../../components/atoms/AppView";

const LoginScreen = (props) => {
  return (
    <AppView {...props}>
      <SafeAreaView>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <LoginForm {...props} />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </AppView>
  );
};

export default LoginScreen;
