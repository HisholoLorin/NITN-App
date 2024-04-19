import { Text, Image } from "react-native";

//Components
import Spacer from "../../atoms/spacer/Index";
import { FormContainer } from "./Styles";

const AppInfoForm = (props) => {
  return (
    <FormContainer>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "#EF9F27",
        }}
      >
        PINEAPPLE
      </Text>

      <Text style={{ color: "#6C6C6C" }}>Version 1.0.1</Text>

      <Spacer>
        <Image
          source={require("../../../../assets/icon.png")}
          style={{ width: 200, height: 150 }}
        />
      </Spacer>

      <Spacer>
        <Text style={{ color: "#6C6C6C" }}>©️ 2023-24 Pineapple</Text>
      </Spacer>
    </FormContainer>
  );
};

export default AppInfoForm;
