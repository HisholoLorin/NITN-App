//Components
import AppView from "../../../components/atoms/AppView";
import UserProfileForm from "../../../components/organisms/UserProfileForm/Index";

const UserProfileScreen = (props) => {
  return (
    <AppView {...props}>
      <UserProfileForm {...props}/>
    </AppView>
  );
};

export default UserProfileScreen;
