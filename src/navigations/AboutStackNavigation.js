import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import AboutScreen from "../screens/drawer/aboutStack/AboutScreen";

//Components
import BackButton from "../components/atoms/backButton/Index";

const AboutStack = createStackNavigator();

const AboutStackNavigation = ({ navigation }) => {
  return (
    <AboutStack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerBackTitleVisible: true, // Hide the default back button title
        headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      }}
    >
      <AboutStack.Screen name="About" component={AboutScreen} />
    </AboutStack.Navigator>
  );
};

export default AboutStackNavigation;
