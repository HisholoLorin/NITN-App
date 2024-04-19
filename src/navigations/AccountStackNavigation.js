import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import AccountScreen from "../screens/drawer/accountStack/AccountScreen";

//Components
import BackButton from "../components/atoms/backButton/Index";

//Helper
import { previousScreen } from "./navigationRef";

const AccountStack = createStackNavigator();

const AccountStackNavigation = () => {
  return (
    <AccountStack.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerBackTitleVisible: true, // Hide the default back button title
        headerLeft: ({}) => <BackButton onPress={previousScreen} />,
      }}
    >
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={() => ({ title: null })}
      />
     
    </AccountStack.Navigator>
  );
};

export default AccountStackNavigation;
