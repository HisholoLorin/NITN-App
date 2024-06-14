import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//Components
import AppView from "../../../../components/atoms/AppView";
import StudentFormDetails from "../../../../components/organisms/studentFormDetails/Index";

const StudentFormDetailsScreen = (props) => {
  return (
    <AppView {...props}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <StudentFormDetails {...props} />
      </KeyboardAwareScrollView>
    </AppView>
  );
};

export default StudentFormDetailsScreen;
