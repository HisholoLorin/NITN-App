import { Text, Image, TouchableOpacity } from "react-native";

// Components
import Spacer from "../../atoms/spacer/Index";

import { TextContainer, IconView } from "./Styles";

const User = ({ item, backgroundColor, navigation }) => {
  const { fullName, uuid } = item;
  const name = fullName.split(" ");
  const firstInitial = name[0][0];
  let lastInitial = null;
  if (name.length - 1 != 0) lastInitial = name[name.length - 1][0];

  return (
    <Spacer>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        key={uuid}
        onPress={() => navigation.navigate("UserProfile", { ...item })}
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
          <Text style={{ fontSize: 18 }}>{fullName}</Text>
        </TextContainer>
      </TouchableOpacity>
    </Spacer>
  );
};

export default User;
