import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import ContactScreen from "../screens/drawer/contactStack/ContactScreen";

//Components
import BackButton from "../components/atoms/backButton/Index";

//Helper
import { previousScreen } from "./navigationRef";

const ContactStack = createStackNavigator();

const ContactStackNavigation = () => {
  return (
    <ContactStack.Navigator
      initialRouteName="Contact"
      screenOptions={{
        headerBackTitleVisible: true, // Hide the default back button title
        headerLeft: () => <BackButton onPress={previousScreen} />,
      }}
    >
      <ContactStack.Screen
        name="Contact"
        component={ContactScreen}
      />
    </ContactStack.Navigator>
  );
};

export default ContactStackNavigation;
