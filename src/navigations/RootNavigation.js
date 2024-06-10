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
import StudentDrawerNavigation from "./StudentDrawerNavigation";
import MaintenanceDrawerNavigation from "./MaintenanceDrawerNavigation";
import ManagerDrawerNavigation from "./ManagerDrawerNavigation";

// Reference to navigation for programmatic access
import { navigationRef } from "./navigationRef";
import Swiper from "../screens/introScreen/Index";
import SplashScreen from "../screens/splashScreen/Index";

const RootNavigation = () => {
  // Create a stack navigator for root navigation
  const RootStack = createStackNavigator();

  return (
    // Navigation container for the entire app
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerBackTitleVisible: true, // Hide the default back button title
          headerLeft: ({ onPress }) => (
            <BackButton onPress={onPress} />
          ),
        }}
      >
        <RootStack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Swiper"
          component={Swiper}
          options={{ headerShown: false }}
        />
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
          name="StudentDrawer"
          component={StudentDrawerNavigation}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="MaintenanceDrawer"
          component={MaintenanceDrawerNavigation}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ManagerDrawer"
          component={ManagerDrawerNavigation}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
