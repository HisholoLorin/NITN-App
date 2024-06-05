import { ScrollView } from "react-native";

//Components
import AppView from "../../../components/atoms/AppView";
import UserProfileForm from "../../../components/organisms/UserProfileForm/Index";

const UserProfileScreen = (props) => {
  return (
    <AppView {...props}>
      <ScrollView>
        <UserProfileForm {...props} />
      </ScrollView>
    </AppView>
  );
};

export default UserProfileScreen;
