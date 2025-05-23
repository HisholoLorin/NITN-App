import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

//Components
import BackButton from "../components/atoms/backButton/Index.js";
import DrawerButton from "../components/atoms/drawerButton/Index.js";

// Screens
import ManagerHomeScreen from "../screens/drawer/managerHomeStack/ManagerHomeScreen.js";
import StudentFormDetailsScreen from "../screens/drawer/studentBottomTab/studentFormStack/StudentFormDetails";

//helper
import { previousScreen } from "./navigationRef";

const ManagerHomeStack = createStackNavigator();

const ManagerHomeStackNavigation = ({ navigation }) => {
  const { userDetails } = useSelector((state) => state.UserReducer);
  return (
    <ManagerHomeStack.Navigator
      initialRouteName="ManagerHome"
      screenOptions={{
        headerBackTitleVisible: true, // Hide the default back button title
        headerLeft: () => <BackButton onPress={previousScreen} />,
      }}
    >
      <ManagerHomeStack.Screen
        name="ManagerHome"
        component={ManagerHomeScreen}
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

      <ManagerHomeStack.Screen
        name="StudentFormDetails"
        component={StudentFormDetailsScreen}
        options={{
          headerLeft: () => (
            <DrawerButton onPress={() => navigation.openDrawer()} />
          ),
          title: "Student Form",
        }}
      />
    </ManagerHomeStack.Navigator>
  );
};

export default ManagerHomeStackNavigation;
