//Components
import SettingsForm from "../../../components/organisms/settingForm/Index";
import AppView from "../../../components/atoms/AppView";

const SettingsScreen = (props) => {
  return (
    <AppView {...props}>
      <SettingsForm {...props} />
    </AppView>
  );
};

export default SettingsScreen;
