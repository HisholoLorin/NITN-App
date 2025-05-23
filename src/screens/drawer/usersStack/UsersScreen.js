//Components
import AppView from "../../../components/atoms/AppView";
import UsersForm from "../../../components/organisms/usersForm/Index";

const UsersScreen = (props) => {
  return (
    <AppView {...props}>
      <UsersForm {...props} />
    </AppView>
  );
};

export default UsersScreen;
