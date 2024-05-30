import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import LocalLoginTrigger from "../screens/LocalLoginTrigger";
import LoginScreen from "../screens/authentication/LoginScreen";
import SignupScreen from "../screens/authentication/SignupScreen";
import ForgotPasswordScreen from "../screens/authentication/ForgotPasswordScreen";
import ResetPasswordScreen from "../screens/authentication/ResetPasswordScreen";
import OTPScreen from "../screens/authentication/OTPScreen";

//Components
import BackButton from "../components/atoms/backButton/Index";

// Navigations
import MainDrawerNavigation from "./MainDrawerNavigation";

// Reference to navigation for programmatic access
import { navigationRef } from "./navigationRef";

const RootNavigation = () => {
  // Create a stack navigator for root navigation
  const RootStack = createStackNavigator();

  return (
    // Navigation container for the entire app
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerBackTitleVisible: true, // Hide the default back button title
          headerLeft: ({ onPress }) => (
            <BackButton onPress={onPress} />
          ),
        }}
      >
        <RootStack.Screen
          name="LocalLoginTrigger"
          component={LocalLoginTrigger}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Signup"
          component={SignupScreen}
          options={() => ({ title: null })}
        />
        <RootStack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={() => ({ title: null })}
        />
        <RootStack.Screen
          name="OTP"
          component={OTPScreen}
          options={() => ({ title: null })}
        />
        <RootStack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={() => ({ title: null })}
        />
        <RootStack.Screen
          name="Drawer"
          component={MainDrawerNavigation}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
