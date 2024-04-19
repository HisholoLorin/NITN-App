//Components
import AppView from "../../../components/atoms/AppView";
import AccountForm from "../../../components/organisms/accountForm/Index";

const AccountScreen = (props) => {
  return (
    <AppView {...props}>
      <AccountForm {...props} />
    </AppView>
  );
};

export default AccountScreen;
