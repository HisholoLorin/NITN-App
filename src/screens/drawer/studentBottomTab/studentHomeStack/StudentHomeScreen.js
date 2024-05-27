//Components
import AppView from "../../../components/atoms/AppView";
import HomeForm from "../../../../components/organisms/homeForm/Index";

const HomeScrreen = (props) => {
  return (
    <AppView {...props}>
      <HomeForm {...props} />
    </AppView>
  );
};

export default HomeScrreen;
