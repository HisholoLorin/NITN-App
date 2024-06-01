//Components
import AppView from "../../../../components/atoms/AppView";
import StudentForm from "../../../../components/organisms/studentForm/Index";

const StudentFormScreen = (props) => {
  return (
    <AppView {...props}>
      <StudentForm {...props}/>
    </AppView>
  );
};

export default StudentFormScreen;