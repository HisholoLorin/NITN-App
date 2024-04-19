import { Feather } from "@expo/vector-icons";

//Components
import IconLabelButton from "../../molecules/iconLabelButton/Index";
import Title from "../../atoms/title/Index";
import Spacer from "../../atoms/spacer/Index";
import Divider from "../../atoms/divider/Index";
import LogoutButton from "../../molecules/logoutButton/Index";

//Styled Components
import { FormContainer } from "./Styles";

const SettingsForm = ({ navigation }) => {
  return (
    <FormContainer>
      <Title>Settings</Title>
      <Spacer />

      <IconLabelButton
        label="App Info"
        icon={() => <Feather name="info" size={20} />}
        onPress={() => {
          navigation.navigate("AppInfo");
        }}
      />

      <Divider top={10} bottom={10} />

      <LogoutButton />
    </FormContainer>
  );
};

export default SettingsForm;
