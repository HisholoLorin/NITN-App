//Components
import AppInfoForm from "../../../components/organisms/appInfoForm/Index";
import AppView from "../../../components/atoms/AppView";

const AppInfoScreen = (props) => {
  return (
    <AppView {...props}>
      <AppInfoForm {...props}/>
    </AppView>
  );
};

export default AppInfoScreen;
