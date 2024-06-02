import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import ProfileScreen from "../screens/drawer/profileStack/ProfileScreen";

//Components
import BackButton from "../components/atoms/backButton/Index";
import EditButton from "../components/atoms/editButton/Index";

//helper
import { previousScreen } from "./navigationRef";

const ProfileStack = createStackNavigator();

const ProfileStackNavigation = ({ navigation }) => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerBackTitleVisible: true, // Hide the default back button title
        headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        headerRight: () => (
          <EditButton onPress={() => navigation.navigate("EditProfile")} />
        ),
      }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigation;
