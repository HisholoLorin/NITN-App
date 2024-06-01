//Components
import AppView from "../../../../components/atoms/AppView";
import StudentFormDetails from "../../../../components/organisms/studentFormDetails/Index";

const StudentFormDetailsScreen = (props) => {
  return (
    <AppView {...props}>
      <StudentFormDetails {...props}/>
    </AppView>
  );
};

export default StudentFormDetailsScreen;