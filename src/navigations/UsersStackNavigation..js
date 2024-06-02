import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import UsersScreen from "../screens/drawer/usersStack/UsersScreen";

//Components
import BackButton from "../components/atoms/backButton/Index";

//helper
import { previousScreen } from "./navigationRef";

const UsersStack = createStackNavigator();

const UsersStackNavigation = ({ navigation }) => {
  return (
    <UsersStack.Navigator
      initialRouteName="Users"
      screenOptions={{
        headerBackTitleVisible: true, // Hide the default back button title
        headerLeft: () => <BackButton onPress={previousScreen} />,
      }}
    >
      <UsersStack.Screen name="Users" component={UsersScreen} />
    </UsersStack.Navigator>
  );
};

export default UsersStackNavigation;
