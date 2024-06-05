import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import BackButton from "../components/atoms/backButton/Index";
import DrawerButton from "../components/atoms/drawerButton/Index";

// Screens
import MaintenanceHomeScreen from "../screens/drawer/maintenanceHomeStack/MaintenanceHomeScreen";
import StudentFormDetailsScreen from "../screens/drawer/studentBottomTab/studentFormStack/StudentFormDetails";

//helper
import { previousScreen } from "./navigationRef";

const MaintenanceHomeStack = createStackNavigator();

const MaintenanceHomeStackNavigation = ({ navigation }) => {
  return (
    <MaintenanceHomeStack.Navigator
      initialRouteName="MaintenanceHome"
      screenOptions={{
        headerBackTitleVisible: true, // Hide the default back button title
        headerLeft: () => <BackButton onPress={previousScreen} />,
      }}
    >
      <MaintenanceHomeStack.Screen
        name="MaintenanceHome"
        component={MaintenanceHomeScreen}
        options={{
          headerLeft: () => (
            <DrawerButton onPress={() => navigation.openDrawer()} />
          ),
          title: "Home",
        }}
      />

      <MaintenanceHomeStack.Screen
        name="StudentFormDetails"
        component={StudentFormDetailsScreen}
        options={{
          headerLeft: () => (
            <DrawerButton onPress={() => navigation.openDrawer()} />
          ),
          title: "Student Form",
        }}
      />
    </MaintenanceHomeStack.Navigator>
  );
};

export default MaintenanceHomeStackNavigation;
