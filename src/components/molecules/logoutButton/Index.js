import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

//Components
import Spacer from "../../atoms/spacer/Index";

//Global Styles
import globalStyles, { IconStyle } from "../../globalStyles";

//Redux
import { logout } from "../../../redux/auth";

const LogoutButton = () => {
  const dispatch = useDispatch();
  return (
    <Spacer>
      <TouchableOpacity
        onPress={() => dispatch(logout())}
        style={{ flexDirection: "row" }}
      >
        <View style={globalStyles.iconContainer}>
          <MaterialCommunityIcons
            name="power"
            style={IconStyle({ iconSize: 22, setIconColor: "red" })}
          />
        </View>
        <Text style={{ color: "red" }}>Log Out</Text>
      </TouchableOpacity>
    </Spacer>
  );
};

export default LogoutButton;
