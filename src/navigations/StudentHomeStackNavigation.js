import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

//Components
import BackButton from "../components/atoms/backButton/Index";
import DrawerButton from "../components/atoms/drawerButton/Index";

// Screens
import StudentHomeScreen from "../screens/drawer/studentBottomTab/studentHomeStack/StudentHomeScreen";

//helper
import { previousScreen } from "./navigationRef";

const StudentHomeStack = createStackNavigator();

const StudentHomeStackNavigation = ({ navigation }) => {
  const { userDetails } = useSelector((state) => state.UserReducer);
  return (
    <StudentHomeStack.Navigator
      initialRouteName="StudentHome"
      screenOptions={{
        headerBackTitleVisible: true, // Hide the default back button title
        headerLeft: () => <BackButton onPress={previousScreen} />,
      }}
    >
      <StudentHomeStack.Screen
        name="StudentHome"
        component={StudentHomeScreen}
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
    </StudentHomeStack.Navigator>
  );
};

export default StudentHomeStackNavigation;
