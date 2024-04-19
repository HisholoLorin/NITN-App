import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Stacks
import AccountStackNavigation from "./AccountStackNavigation";
import SettingStackNavigation from "./SettingStackNavigation";
import HomeStackNavigation from "./HomeStackNavigation";

// Screens
import DrawerContent from "../screens/drawer/drawerContent/Index";

// Create drawer navigator
const Drawer = createDrawerNavigator();

/**
 * Main Drawer Navigation component
 * This component creates the main navigation drawer for the app.
 */
const MainDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerLabelStyle: {
          marginLeft: -15,
          fontSize: 16,
          fontWeight: "none",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      {/* Drawer Screens */}
      <Drawer.Screen name="HomeStackNavigation" component={HomeStackNavigation} />
      <Drawer.Screen name="AccountStack" component={AccountStackNavigation} />
      <Drawer.Screen name="SettingStack" component={SettingStackNavigation} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigation;
