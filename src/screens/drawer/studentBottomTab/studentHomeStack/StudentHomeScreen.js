//Components
import AppView from "../../../../components/atoms/AppView";
import StudentHomeForm from "../../../../components/organisms/studentHomeForm/Index";

const HomeScrreen = (props) => {
  return (
    <AppView {...props}>
      <StudentHomeForm {...props} />
    </AppView>
  );
};

export default HomeScrreen;
