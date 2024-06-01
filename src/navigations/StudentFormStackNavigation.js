import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

//Components
import BackButton from "../components/atoms/backButton/Index";
import DrawerButton from "../components/atoms/drawerButton/Index";

// Screens
import StudentFormScreen from "../screens/drawer/studentBottomTab/studentFormStack/StudentForm";
import StudentFormDetailsScreen from "../screens/drawer/studentBottomTab/studentFormStack/StudentFormDetails";

//Helper
import { previousScreen } from "./navigationRef";

const StudentFormStack = createStackNavigator();

const StudentFormStackNavigation = ({ navigation }) => {
  const { userDetails } = useSelector((state) => state.UserReducer);
  return (
    <StudentFormStack.Navigator
      initialRouteName="StudentHome"
      screenOptions={{
        headerBackTitleVisible: true, // Hide the default back button title
        headerLeft: () => <BackButton onPress={previousScreen} />,
      }}
    >
      <StudentFormStack.Screen
        name="StudentForm"
        component={StudentFormScreen}
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

      <StudentFormStack.Screen
        name="StudentFormDetails"
        component={StudentFormDetailsScreen}
        options={{

          title: "Form Details",
        }}
      />
    </StudentFormStack.Navigator>
  );
};

export default StudentFormStackNavigation;
