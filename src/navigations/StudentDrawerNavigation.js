import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Stacks
import ProfileStackNavigation from "./ProfileStackNavigation";
import ContactStackNavigation from "./ContactStackNavigation";
import AboutStackNavigation from "./AboutStackNavigation";

//Bottom Tab
import StudentBottomTabNavigation from "./StudentBottomTabNavigation";

// Screens
import DrawerContent from "../screens/drawer/drawerContent/Index";

// Create drawer navigator
const StudentDrawer = createDrawerNavigator();

/**
 * Main StudentDrawer Navigation component
 * This component creates the main student navigation drawer for the app.
 */
const StudentDrawerNavigation = () => {
  return (
    <StudentDrawer.Navigator
      initialRouteName={"StudentBottomTab"}
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerLabelStyle: {
          marginLeft: -15,
          fontSize: 16,
          fontWeight: "none",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} usertype="Student" />}
    >
      <StudentDrawer.Screen
        name="StudentBottomTab"
        component={StudentBottomTabNavigation}
      />

      <StudentDrawer.Screen
        name="ProfileStack"
        component={ProfileStackNavigation}
      />
      <StudentDrawer.Screen
        name="ContactStack"
        component={ContactStackNavigation}
      />
      <StudentDrawer.Screen
        name="AboutStack"
        component={AboutStackNavigation}
      />
    </StudentDrawer.Navigator>
  );
};

export default StudentDrawerNavigation;
