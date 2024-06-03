//Components
import AppView from "../../../components/atoms/AppView";
import MaintenanceHormForm from "../../../components/organisms/maintenanceHomeForm/Index";

const MaintenanceHomeScreen = (props) => {
  return (
    <AppView {...props}>
      <MaintenanceHormForm {...props} />
    </AppView>
  );
};

export default MaintenanceHomeScreen;
