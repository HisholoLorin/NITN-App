import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import ProfileScreen from "../screens/drawer/profileStack/ProfileScreen";

//Components
import BackButton from "../components/atoms/backButton/Index";

//helper
import { previousScreen } from "./navigationRef";

const ProfileStack = createStackNavigator();

const ProfileStackNavigation = ({ navigation }) => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerBackTitleVisible: true, // Hide the default back button title
        headerLeft: () => <BackButton onPress={previousScreen} />,
      }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigation;
