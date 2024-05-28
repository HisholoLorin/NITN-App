import { View, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  SimpleLineIcons,
} from "@expo/vector-icons";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/auth";

//Component
import DrawerHeader from "../../../components/molecules/drawerHeader/Index";
import Divider from "../../../components/atoms/divider/Index";

//Styled
import { Container, LogoutContainer, Logout } from "./Styles";

//Styles
import globalStyles, { IconStyle } from "../../../components/globalStyles";

export default ({ navigation }) => {
  const { userDetails } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  handleLogout = () => {
    navigation.closeDrawer();
    dispatch(logout())
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <Container>
          <DrawerHeader userDetails={userDetails} />
        </Container>

        <Divider top={10} bottom={20} marginHorizontal={20} />

        {/* Profile */}
        <DrawerItem
          label="Profile"
          icon={() => (
            <View style={globalStyles.iconContainer}>
              <FontAwesome5 name="user-circle" style={IconStyle()} />
            </View>
          )}
          onPress={() => navigation.navigate("ProfileStack")}
          labelStyle={styles.label}
        />

        {/* Contact */}
        <DrawerItem
          label="Contact"
          icon={() => (
            <View style={globalStyles.iconContainer}>
              <FontAwesome name="phone-square" style={IconStyle()} />
            </View>
          )}
          onPress={() => navigation.navigate("ContactStack")}
          labelStyle={styles.label}
        />

        {/* About */}
        <DrawerItem
          label="About"
          icon={() => (
            <View style={globalStyles.iconContainer}>
              <FontAwesome5 name="question-circle" style={IconStyle()} />
            </View>
          )}
          onPress={() => navigation.navigate("AboutStack")}
          labelStyle={styles.label}
        />
      </DrawerContentScrollView>

      {/* Logout */}
      <TouchableOpacity onPress={handleLogout}>
        <LogoutContainer>
          <SimpleLineIcons
            name="logout"
            style={IconStyle({ setIconColor: "red" })}
          />
          <Logout>Logout</Logout>
        </LogoutContainer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginLeft: "-10%",
    textAlign: "left",
  },
});
