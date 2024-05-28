import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Stacks
import ProfileStackNavigation from "./ProfileStackNavigation";
import ContactStackNavigation from "./ContactStackNavigation";
import AboutStackNavigation from "./AboutStackNavigation";

import MaintenanceHomeStackNavigation from "./MaintenanceHomeStackNavigation";
import ManagerHomeStackNavigation from "./ManagerHomeStackNavigation";

//Bottom Tab
import StudentBottomTabNavigation from "./StudentBottomTabNavigation";

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
      <Drawer.Screen
        name="StudentBottomTab"
        component={StudentBottomTabNavigation}
      />
      <Drawer.Screen
        name="MaintenanceHomeStack"
        component={MaintenanceHomeStackNavigation}
      />
      <Drawer.Screen
        name="ManagerHomeStack"
        component={ManagerHomeStackNavigation}
      />
      <Drawer.Screen name="ProfileStack" component={ProfileStackNavigation} />
      <Drawer.Screen name="ContactStack" component={ContactStackNavigation} />
      <Drawer.Screen name="AboutStack" component={AboutStackNavigation} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigation;
