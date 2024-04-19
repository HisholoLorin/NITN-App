import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";

//Redux
import { useSelector } from "react-redux";

//Component
import DrawerHeader from "../../../components/molecules/drawerHeader/Index";
import Divider from "../../../components/atoms/divider/Index";

import { Container } from "./Styles";

//Styles
import globalStyles, { IconStyle } from "../../../components/globalStyles";

export default ({ navigation }) => {
  //Redux State
  const { userDetails } = useSelector((state) => state.UserReducer);
  return (
    <View style={{flex : 1}}>
      <DrawerContentScrollView>
        <Container>
          <DrawerHeader userDetails={userDetails} />
        </Container>

        <Divider top={10} bottom={20} marginHorizontal={20} />

        {/* Account */}
        <DrawerItem
          label="Account"
          icon={() => (
            <View style={globalStyles.iconContainer}>
              <FontAwesome5
                name="user-circle"
                style={IconStyle({ iconAlignment: "center" })}
              />
            </View>
          )}
          onPress={() => navigation.navigate("AccountStack")}
          labelStyle={{ fontSize: 16, marginLeft: "-10%", textAlign: "left" }}
        />

        {/* Settings */}
        <DrawerItem
          label="Settings"
          icon={() => (
            <View style={globalStyles.iconContainer}>
              <MaterialCommunityIcons
                name="cog-outline"
                style={IconStyle({ iconAlignment: "center" })}
              />
            </View>
          )}
          onPress={() => navigation.navigate("SettingStack")}
          labelStyle={styles.label}
        />

      </DrawerContentScrollView>
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
