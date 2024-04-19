import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import BackButton from "../components/atoms/backButton/Index";

//Screens
import SettingsScreen from "../screens/drawer/settingStack/SettingsScreen";
import AppInfoScreen from "../screens/drawer/settingStack/AppInfoScreen";

//Helper
import { previousScreen } from "./navigationRef";

const SettingStack = createStackNavigator();

const SettingStackNavigation = () => {
  return (
    <SettingStack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerBackTitleVisible: true, // Hide the default back button title
        headerLeft: () => <BackButton onPress={previousScreen} />,
      }}
    >
      <SettingStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: null }}
      />
      <SettingStack.Screen
        name="AppInfo"
        component={AppInfoScreen}
        options={{ title: null}}
      />
    </SettingStack.Navigator>
  );
};

export default SettingStackNavigation;
