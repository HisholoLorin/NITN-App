import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

//Components
import BackButton from "../components/atoms/backButton/Index";
import DrawerButton from "../components/atoms/drawerButton/Index";

// Screens
import MaintenanceHomeScreen from "../screens/drawer/maintenanceHomeStack/MaintenanceHomeScreen";

//Helper
import { previousScreen } from "./navigationRef";

const MaintenanceHomeStack = createStackNavigator();

const MaintenanceHomeStackNavigation = ({ navigation }) => {
  const { userDetails } = useSelector((state) => state.UserReducer);
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
            <DrawerButton
              image={userDetails?.image}
              onPress={() => navigation.openDrawer()}
            />
          ),
          title: "Home",
        }}
      />

    </MaintenanceHomeStack.Navigator>
  );
};

export default MaintenanceHomeStackNavigation;
