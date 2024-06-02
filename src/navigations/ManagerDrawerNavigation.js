import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Stacks
import ProfileStackNavigation from "./ProfileStackNavigation";
import ContactStackNavigation from "./ContactStackNavigation";
import AboutStackNavigation from "./AboutStackNavigation";
import UsersStackNavigation from "./UsersStackNavigation.";

import ManagerHomeStackNavigation from "./ManagerHomeStackNavigation";

// Screens
import DrawerContent from "../screens/drawer/drawerContent/Index";

// Create drawer navigator
const ManagerDrawer = createDrawerNavigator();

const ManagerDrawerNavigation = () => {
  return (
    <ManagerDrawer.Navigator
      initialRouteName={"ManagerHomeStack"}
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
        <DrawerContent {...props} usertype="Manager" />
      )}
    >
      <ManagerDrawer.Screen
        name="ManagerHomeStack"
        component={ManagerHomeStackNavigation}
      />
      <ManagerDrawer.Screen
        name="ProfileStack"
        component={ProfileStackNavigation}
      />
      <ManagerDrawer.Screen
        name="ContactStack"
        component={ContactStackNavigation}
      />
      <ManagerDrawer.Screen
        name="AboutStack"
        component={AboutStackNavigation}
      />
      <ManagerDrawer.Screen
        name="UsersStack"
        component={UsersStackNavigation}
      />
    </ManagerDrawer.Navigator>
  );
};

export default ManagerDrawerNavigation;
