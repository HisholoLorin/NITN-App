import { Text, Image, TouchableOpacity } from "react-native";

// Components
import Spacer from "../../atoms/spacer/Index";

import { TextContainer, IconView } from "./Styles";

const User = ({ user, student, maintenance, backgroundColor, navigation }) => {
  const { userName } = user || {};
  const name = userName.split(" ");
  const firstInitial = name[0][0];
  let lastInitial = null;
  if (name.length - 1 != 0) lastInitial = name[name.length - 1][0];

  return (
    <Spacer>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() =>
          navigation.navigate("UserProfile", { user, student, maintenance })
        }
      >
        <IconView backgroundColor={backgroundColor}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              color: "#ffffff",
            }}
          >
            {lastInitial ? firstInitial + lastInitial : firstInitial}
          </Text>
        </IconView>
        <TextContainer>
          <Text style={{ fontSize: 18 }}>{userName}</Text>
        </TextContainer>
      </TouchableOpacity>
    </Spacer>
  );
};

export default User;
