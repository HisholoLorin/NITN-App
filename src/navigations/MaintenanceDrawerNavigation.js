import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Stacks
import ProfileStackNavigation from "./ProfileStackNavigation";
import ContactStackNavigation from "./ContactStackNavigation";
import AboutStackNavigation from "./AboutStackNavigation";

import MaintenanceHomeStackNavigation from "./MaintenanceHomeStackNavigation";


// Screens
import DrawerContent from "../screens/drawer/drawerContent/Index";

// Create drawer navigator
const MaintenanceDrawer = createDrawerNavigator();

const MaintenanceDrawerNavigation = () => {
  return (
    <MaintenanceDrawer.Navigator
      initialRouteName={"MaintenanceHomeStack"}
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerLabelStyle: {
          marginLeft: -15,
          fontSize: 16,
          fontWeight: "none",
        },
      }}
      drawerContent={(props) => (
        <DrawerContent {...props} usertype="Maintenance" />
      )}
    >
      <MaintenanceDrawer.Screen
        name="MaintenanceHomeStack"
        component={MaintenanceHomeStackNavigation}
      />
      <MaintenanceDrawer.Screen
        name="ProfileStack"
        component={ProfileStackNavigation}
      />
      <MaintenanceDrawer.Screen
        name="ContactStack"
        component={ContactStackNavigation}
      />
      <MaintenanceDrawer.Screen
        name="AboutStack"
        component={AboutStackNavigation}
      />
    </MaintenanceDrawer.Navigator>
  );
};

export default MaintenanceDrawerNavigation;
