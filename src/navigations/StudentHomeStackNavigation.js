import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

//Components
import BackButton from "../components/atoms/backButton/Index";
import DrawerButton from "../components/atoms/drawerButton/Index";

// Screens
import StudentHomeScreen from "../screens/drawer/studentHomeStack/StudentHomeScreen";

//Helper
import { previousScreen } from "./navigationRef";

const HomeStack = createStackNavigator();

const HomeStackNavigation = ({ navigation }) => {
  const { userDetails } = useSelector((state) => state.UserReducer);
  return (
    <HomeStack.Navigator
      initialRouteName="StudentHome"
      screenOptions={{
        headerBackTitleVisible: true, // Hide the default back button title
        headerLeft: () => <BackButton onPress={previousScreen} />,
      }}
    >
      <HomeStack.Screen
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

    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
