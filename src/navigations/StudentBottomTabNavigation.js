import React from "react";
import { Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//Components
import DrawerButton from "../components/atoms/drawerButton/Index";

//Stack
import StudentHomeStackNavigation from "./StudentHomeStackNavigation";
import StudentFormStackNavigation from "./StudentFormStackNavigation";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = ({ navigation }) => {
  // Function to render tab bar icon and label
  const renderTabBarIcon = (label, focused, icon) => (
    <>
      {icon()}
      <Text
        style={
          focused
            ? [styles.focus, { fontSize: 14 }]
            : [styles.unFocus, { fontSize: 12 }]
        }
      >
        {label}
      </Text>
    </>
  );
  return (
    <BottomTab.Navigator
      initialRouteName="StudentHomeStack"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          elevation: 20,
          marginTop: -10,
        },
        headerShown: false,
      }}
    >
      {/* Student Home Tab */}
      <BottomTab.Screen
        name="StudentHomeStack"
        component={StudentHomeStackNavigation}
        options={{
          tabBarIcon: ({ focused }) =>
            renderTabBarIcon("Home", focused, () => (
              <Ionicons
                name="home"
                size={focused ? 27 : 20}
                style={focused ? styles.focus : styles.unFocus}
              />
            )),
        }}
      />

      {/* Student Form Tab */}
      <BottomTab.Screen
        name="StudentFormStack"
        component={StudentFormStackNavigation}
        options={{
          tabBarIcon: ({ focused }) =>
            renderTabBarIcon("Form", focused, () => (
              <Ionicons
                name="document-text-sharp"
                size={focused ? 27 : 20}
                style={focused ? styles.focus : styles.unFocus}
              />
            )),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  focus: {
    color: "#F06449",
    fontWeight: "bold",
  },
  unFocus: {
    color: "#001F54",
    fontWeight: "bold",
  },
});

export default BottomTabNavigation;
