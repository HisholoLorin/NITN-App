//Components
import AppView from "../../../components/atoms/AppView";
import ManagerHomeForm from "../../../components/organisms/managerHomeForm/Index";

const ManagerHomeScreen = (props) => {
  return (
    <AppView {...props}>
      <ManagerHomeForm {...props}/>
    </AppView>
  );
};

export default ManagerHomeScreen;
